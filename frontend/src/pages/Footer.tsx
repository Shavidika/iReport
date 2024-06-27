import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 mt-16 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start text-left px-8 md:px-16 space-y-8 md:space-y-0 md:space-x-16">
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-100 text-justify">
            iReport is a dynamic news reporting platform that empowers
            individuals from all walks of life to become citizen journalists. Our
            mission is to provide a reliable and inclusive space where anyone can
            report and share news, fostering a diverse and transparent media
            environment. By leveraging the collective insights and experiences of
            our users, iReport delivers real-time, ground-level news coverage that
            is both comprehensive and authentic. Join us in transforming the way
            the world stays informed, one story at a time.
          </p>
        </div>
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-100">Email: info@ireport.com</p>
          <p className="text-gray-100">Phone: +123-456-7890</p>
          <p className="text-gray-100">Address: 123 News St, Journalism City, NY</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">News Categories</h3>
          <nav className="flex flex-col space-y-2">
            <Link to="/business-news" className="hover:text-gray-300">
              Business News
            </Link>
            <Link to="/social-news" className="hover:text-gray-300">
              Social News
            </Link>
            <Link to="/security-news" className="hover:text-gray-300">
              Security News
            </Link>
            <Link to="/sport" className="hover:text-gray-300">
              Sports
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
