// frontend/src/pages/signup_page.jsx

import React from 'react';
import Header from '../Components/Header';


const SignupPage = () => {
  return (
    <div className="bg-red-500 text-white min-h-screen">
      <Header/>

      <div className="container mx-auto mt-8 p-8">
        <h1 className="text-3xl font-bold mb-4">Sign Up</h1>

        <form className="max-w-md">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">User Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your user name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your phone number"
            />
          </div>

          <button
            type="submit"
            className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800 transition"
          >
            Sign Up
          </button>
        </form>
      </div>

      <footer/>
    </div>
  );
};

export default SignupPage;
