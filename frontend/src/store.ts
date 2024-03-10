import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import notificationReducer from "./slices/notificationSlice";
import articlesReducer from "./slices/articleSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    notification: notificationReducer,
    articles: articlesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
