import React from "react";
import Header from "../components/Header";
import Map from "../Assets/World_dot_map.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux-hooks";
import { login } from "../slices/authSlice";
import { Console } from "console";

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handle = () => {
    console.log(process.env.REACT_APP_BACKEND_BASE_URL);
    navigate("/home");
  };

  const handleLogin = async () => {
    //console.log("Login button clicked");
    // This is only a basic validation of inputs. Improve this as needed.
    if (email && password) {
      try {
        const user = await dispatch(
          login({
            email,
            password,
          })
        ).unwrap();
      } catch (e) {
        console.error(e);
      }
    } else {
      console.log("there is an Error");
      // Show an error message.
    }
  };

  return (
    <div style={{ background: "red" }} className="text-black min-h-screen">
      <Header />

      <div className="container flex mx-10 mt-8 p-0 md:mx-auto xl:ml-20">
        <div className="flex-col w-fit mr-8 sm:w-96 sm:min-w-72 sm:p-0 md:p-14">
          <h1 className="text-3xl font-Semibold mb-4">Login</h1>
          <form className="w-auto lg:w-96">
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                className="p-2 border border-gray-300 rounded text-black w-full"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded text-black"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Role</label>
              <select
                className="w-full p-2 border border-gray-300 rounded text-black"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your role
                </option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="reporter">Reporter</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-1000 transition"
              onClick={handleLogin}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="scale-95 flex justify-center items-center lg:scale-100 lg:h-96 xl:ml-96 md:ml-32 md:mx-auto md:mt-14 hidden sm:block ">
          <img src={Map} alt="World Map" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
