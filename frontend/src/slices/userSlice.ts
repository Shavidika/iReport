import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";
import { AxiosError } from "axios";
import { ErrorResponse } from "../constants";

type UserInfo = {
  id: string;
  name: string;
  email: string;
  roles: string[];
  cv_link: string;
};

type UserApiState = {
  users: UserInfo[];
  status: "idle" | "loading" | "failed";
  error: string | null;
};

const initialState: UserApiState = {
  users: [],
  status: "idle",
  error: null,
};

export const getUsers = createAsyncThunk(
  "users/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/users");
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

export const getReporterRequests = createAsyncThunk(
  "users/getReporterRequests",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/users/get/reporterRequests");
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

export const requestReporter = createAsyncThunk(
  "users/requestReporter",
  async (cv_link: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/users/requestReporter", {
        cv_link,
      });
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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getUsers.fulfilled,
        (state, action: PayloadAction<UserInfo[]>) => {
          state.status = "idle";
          state.users = action.payload;
        }
      )
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error =
            (action.payload as ErrorResponse).message ||
            "Retrieving users failed";
        } else {
          state.error = action.error.message || "Retrieving users failed";
        }
      })
      .addCase(getReporterRequests.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        getReporterRequests.fulfilled,
        (state, action: PayloadAction<UserInfo[]>) => {
          state.status = "idle";
          state.users = action.payload;
        }
      )
      .addCase(getReporterRequests.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error =
            (action.payload as ErrorResponse).message ||
            "Retrieving reporter requests failed";
        } else {
          state.error = action.error.message || "Retrieving reporter requests failed";
        }
      })
      .addCase(requestReporter.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(requestReporter.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(requestReporter.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error =
            (action.payload as ErrorResponse).message ||
            "Requesting reporter failed";
        } else {
          state.error = action.error.message || "Requesting reporter failed";
        }
      });
  },
});

export default userSlice.reducer;
