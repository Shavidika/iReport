import React from "react";
import { FaLock } from 'react-icons/fa';
import { AiOutlineWarning } from 'react-icons/ai';

const AccessDenied = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="text-red-500 justify-center">
          <AiOutlineWarning  size={50} className="justify-center" />
        </div>
        <h1 className="text-3xl font-bold mt-4">Access Denied</h1>
        <p className="mt-2 text-gray-600">You do not have permission to view this page.</p>
        {/* <div className="mt-6 text-gray-500">
          <FaLock size={30} />
        </div> */}
        <button
          onClick={() => window.location.href = '/'}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default AccessDenied;
