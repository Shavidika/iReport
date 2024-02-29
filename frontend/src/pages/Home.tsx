import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/login");
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <header className="mb-0">
        <img
          src="https://i.ibb.co/dPftDQN/Logo.png"
          alt="iReport Logo"
          className="h-16 w-auto mb-10"
        />
      </header>
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to iReport</h1>
        <p className="text-lg mb-6">Your trusted source for reliable news</p>
        <button
          className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-red-500 transition-colors duration-300"
          onClick={handleSignUpClick}
        >
          Log In
        </button>
      </main>
    </div>
  );
};

export default HomePage;
