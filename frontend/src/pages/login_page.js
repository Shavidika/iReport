import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const LoginPage = () => {
  return (
    <div style={{ background: 'red' }} className="text-black min-h-screen">
      <Header />

      <div className="container mx-auto mt-8 p-8">
        <h1 className="text-3xl font-Semibold mb-4">Login</h1>

        <form className="max-w-md">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded text-black" // Set text color to black
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded text-black" // Set text color to black
              placeholder="Enter your password"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Role</label>
            <select
              className="w-full p-2 border border-gray-300 rounded text-black" // Set text color to black
              defaultValue="" // Set the default value as an empty string or any default value you prefer
            >
              <option value="" disabled>Select your role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="reporter">Reporter</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-1000 transition"
          >
            Log In
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
