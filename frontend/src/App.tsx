import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login_";
import SignupPage from "./pages/Register_";
import DefaultLayout from "./layouts/DefaultLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Profile from "./pages/Profile";
import NewsCard from "./components/News/newsList";
import NewsFeed from "./pages/NewsFeed";
import NotificationBar from "./components/Notification/NotificationBar";
import { Roles } from "./constants";
import UserSettings from "./pages/UserSettings";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import { ProfileInfoPopover } from "./components/profilePopover";
import ReporterRequest from "./components/reporterRequestPopup";
import RequestReporter from "./components/reporterRequestPopup";
import UnderMaintainance from "./pages/UnderMaintainance";
import Dashboard from "./pages/Admin/Dashboard";
import BusinessNews from "./pages/BusinessNews";
import SocialNews from "./pages/SocialNews";
import SecurityNews from "./pages/SecurityNews";
import Sport from "./pages/Sport";
import ArticlePage from "./pages/ArticlePage";
import ReporterDashboard from "./pages/Reporter/ReporterDashboard";

function App() {
  return (
    <>
      <NotificationBar />
      <Routes>

        <Route element={<DefaultLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
        </Route>
        <Route path="/undermaintaince" element={<UnderMaintainance />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/" element={<NewsFeed />} />
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
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/user-settings" element={<UserSettings />} />
        </Route>

        <Route path="/business-news" element={<BusinessNews />} />
        <Route path="/social-news" element={<SocialNews />} />
        <Route path="/security-news" element={<SecurityNews />} />
        <Route path="/sport" element={<Sport />} />

        {/* Route for rendering individual articles */}
        <Route path="/:category/:slug" element={<ArticlePage />} />

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
