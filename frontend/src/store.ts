import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import notificationReducer from "./slices/notificationSlice";
import articlesReducer from "./slices/articleSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer, // Adjusted to match the slice name in the state
    notification: notificationReducer,
    articles: articlesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
