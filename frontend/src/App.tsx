import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Register";
import DefaultLayout from "./layouts/DefaultLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<DefaultLayout />}>
          <Route path="/register" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedLayout />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        {/* <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </>
  );
}

export default App;
