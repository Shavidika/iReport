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
  status: string;
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

export const getSubmittedArticles = createAsyncThunk(
  "articles/getSubmitted",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/article/submitted/all");
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

export const getDeclinedArticles = createAsyncThunk(
  "articles/getDeclined",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/article/declined/all");
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

export const getAllArticles = createAsyncThunk(
  "articles/all/get",
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
)

export const getPublishedArticles = createAsyncThunk(
  "articles/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/articles/published/all");
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

export const getDraftArticles = createAsyncThunk(
  "articles/getDraft",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/article/drafts/all");
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

export const publishArticle = createAsyncThunk(
  "articles/publish",
  async (articleId: string, { rejectWithValue }) => {
    try {
      console.log(articleId);
      const response = await axiosInstance.put(`/article/publish/${articleId}`);
      return response.status;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorResponse = error.response.data;

        return rejectWithValue(errorResponse);
      }

      throw error;
    }
  }
);

export const declineArticle = createAsyncThunk(
  "articles/decline",
  async (articleId: string, { rejectWithValue }) => {
    try {
      console.log(articleId);
      const response = await axiosInstance.put(`/article/decline/${articleId}`);
      return response.status;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorResponse = error.response.data;

        return rejectWithValue(errorResponse);
      }

      throw error;
    }
  }
);

export const createEmptyDraft = createAsyncThunk(
  "articles/createDraft",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/article/draft");
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        const errorResponse = error.response.data;

        return rejectWithValue(errorResponse);
      }

      throw error;
    }
  }
)

const articleSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPublishedArticles.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getPublishedArticles.fulfilled,
        (state, action: PayloadAction<ArticleInfo[]>) => {
          state.status = "idle";
          state.articles = action.payload;
        }
      )
      .addCase(getPublishedArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(getAllArticles.pending,(state)=>{
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAllArticles.fulfilled,
        (state, action: PayloadAction<ArticleInfo[]>) => {
          state.status = "idle";
          state.articles = action.payload;
        }
      )
      .addCase(getAllArticles.rejected,(state,action)=>{
        state.status = "failed";
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(getSubmittedArticles.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getSubmittedArticles.fulfilled, (state, action: PayloadAction<ArticleInfo[]>) => {
        state.status = "idle";
        state.articles = action.payload;
      })
      .addCase(getSubmittedArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(getDeclinedArticles.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getDeclinedArticles.fulfilled, (state, action: PayloadAction<ArticleInfo[]>) => {
        state.status = "idle";
        state.articles = action.payload;
      })
      .addCase(getDeclinedArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ? action.error.message : null;
      }).
      addCase(getDraftArticles.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getDraftArticles.fulfilled, (state, action: PayloadAction<ArticleInfo[]>) => {
        state.status = "idle";
        state.articles = action.payload;
      })
      .addCase(getDraftArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ? action.error.message : null;
      })
  },
});

export default articleSlice.reducer;
