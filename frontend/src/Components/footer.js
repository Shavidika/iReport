import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-left">
          <p>All rights reserved <span className="text-red-500">iReport</span> @2024</p>
        </div>
        <div className="text-right">
          <p>Contact Us</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
