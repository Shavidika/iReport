import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-2 fixed bottom-0 w-full flex justify-between items-center">
      <div>&copy; {new Date().getFullYear()} iReport. All rights reserved.</div>
      <div>Contact us</div>
    </footer>
  );
}
