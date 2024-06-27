import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import Header from "../components/Header";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-red-600 text-white min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
          <div className="mb-8">
            <p className="text-lg mb-4">
              <strong>Email:</strong> <a href="mailto:info@ireport.com" className="text-white underline">info@ireport.com</a>
            </p>
            <p className="text-lg mb-4">
              <strong>Phone:</strong> <a href="tel:+123-456-7890" className="text-white underline">+123-456-7890</a>
            </p>
            <p className="text-lg mb-4">
              <strong>Address:</strong> 123 News St, Journalism City, NY
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={32} className="text-white" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={32} className="text-white" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok size={32} className="text-white" />
            </a>
          </div>
          <div className="border border-gray-300 p-4 rounded-lg">
            <img src="https://tampabaycateringco.com/wp-content/uploads/contact-banner.jpg" alt="Contact Us" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
