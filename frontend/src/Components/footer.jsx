import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-4 flex justify-between">
      <div>&copy; {new Date().getFullYear()} iReport. All rights reserved.</div>
      <div>Contact us</div>
    </footer>
  );
}
