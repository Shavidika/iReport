import React, { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getUser, logout } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const avatarImageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png";

  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
  const userProfileInfo = useAppSelector((state) => state.auth.userProfileData);

  useEffect(() => {
    if (basicUserInfo) {
      dispatch(getUser(basicUserInfo.id));
    }
  }, [basicUserInfo]);

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate("/login");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div style={{ textAlign: "center", color: "black" }}>
      <h1 style={{ color: "red", marginBottom: "20px" }}>Profile</h1>
      <div style={{ marginBottom: "20px" }}>
        <img
          src={userProfileInfo?.userImage || avatarImageUrl}
          alt="User Avatar"
          className="h-40 w-40 rounded-full mx-auto"
        />
      </div>
      <Typography variant="h5" style={{ marginBottom: "10px", color: "black" }}>
        Name: {userProfileInfo?.name}
      </Typography>
      <Typography variant="h5" style={{ marginBottom: "10px", color: "black" }}>
        Email: {userProfileInfo?.email}
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: "red", color: "white" }}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default Profile;
