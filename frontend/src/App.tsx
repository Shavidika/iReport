import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login_";
import SignupPage from "./pages/Register_";
import DefaultLayout from "./layouts/DefaultLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Profile from "./pages/Profile";
import NewsCard from "./components/newsCard";
import NewsFeed from "./pages/NewsFeed";
import NotificationBar from "./components/Notification/NotificationBar";
import { Roles } from "./constants";
import UserSettings from "./pages/UserSettings";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <NotificationBar />
      <Routes>
        <Route path="/test" element={<NewsFeed />} />
        <Route element={<DefaultLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route
          element={
            <ProtectedLayout
              allowedRoles={[Roles.Admin, Roles.Reader, Roles.Reporter]}
            />
          }
        >
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route element={<ProtectedLayout allowedRoles={[Roles.Admin]} />}>
          <Route path="/user-settings" element={<UserSettings />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </>
  );
}

export default App;
