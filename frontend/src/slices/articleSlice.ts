import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";
import { AxiosError } from "axios";

type ArticleInfo = {
  id: string;
  title: string;
  content: string;
  articleImage: string;
  upvotes: number;
  downvotes: number;
  authorName: string;
  authorImage: string;
  authorId: string;
};

type NewsApiState = {
  articles: ArticleInfo[];
  status: "idle" | "loading" | "failed";
  error: string | null;
};

const initialState: NewsApiState = {
  articles: [],
  status: "idle",
  error: null,
};

export const getArticles = createAsyncThunk(
  "articles/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/articles/all");
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorResponse = error.response.data;

        return rejectWithValue(errorResponse);
      }

      throw error;
    }
  }
);

const articleSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getArticles.fulfilled,
        (state, action: PayloadAction<ArticleInfo[]>) => {
          state.status = "idle";
          state.articles = action.payload;
        }
      )
      .addCase(getArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ? action.error.message : null;
      });
  },
});

export default articleSlice.reducer;
