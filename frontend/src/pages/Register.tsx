import React from "react";
import Header from "../components/Header";
import Map from "../Assets/World_dot_map.png";
import { useAppDispatch } from "../hooks/redux-hooks";
import { register } from "../slices/authSlice";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignupPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const roles = ["user"];
  const userImage = "https://i.ibb.co/yWsXMvm/User-Image.png";

  const handleRegister = async (event: React.FormEvent) => {
    if (name && email && password) {
      try {
        await dispatch(
          register({
            name,
            email,
            password,
            roles,
            userImage,
          })
        ).unwrap();
        navigate("/login");
      } catch (e) {
        console.error(e);
      }
    } else {
    }
  };

  return (
    <div style={{ background: "red" }} className="text-black min-h-screen">
      <Header />

      <div className="container flex mx-10 mt-8 p-0 md:mx-auto xl:ml-20">
        <div className="flex-col w-fit mr-8 sm:w-96 sm:min-w-72 sm:p-0 md:p-14">
          <h1 className="text-3xl font-Semibold mb-4">Sign Up</h1>
          <form className="w-auto lg:w-96">
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                User Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded text-black" // Set text color to black
                placeholder="Enter your user name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded text-black" // Set text color to black
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label className="block text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded text-black" // Set text color to black
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full p-2 border border-gray-300 rounded text-black" // Set text color to black
                placeholder="Enter your phone number"
              />
            </div> */}

            <div className="mb-0">
              <label className="block text-sm font-semibold mb-2">
                Already have an account?
                <Link
                  to="/login"
                  className="text-blue-950 ml-1 italic hover:underline"
                >
                  login
                </Link>
              </label>
            </div>

            <button
              type="button"
              className="bg-red-700 text-white mt-4 py-2 px-4 rounded hover:bg-darkred-800 transition"
              onClick={handleRegister}
            >
              Sign Up
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

export default SignupPage;
