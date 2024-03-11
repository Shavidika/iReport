import React from "react";
import Header from "../components/Header";

const AboutUsPage = () => {
  return (
    <div className="bg-red-600 text-white min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About iReport</h1>
          <p className="text-lg mb-6">
            iReport is a trusted platform dedicated to delivering reliable news and information to its users.
          </p>
          <p className="text-lg mb-6">
            Our mission is to empower individuals with the ability to access and share news stories from around the world
            while maintaining high standards of credibility and accuracy.
          </p>
          <p className="text-lg mb-6">
            At iReport, we leverage cutting-edge technology, including machine learning algorithms, to detect and combat
            fake news, ensuring that our users receive only authentic and verified information.
          </p>
          <p className="text-lg mb-6">
            Whether it's breaking news, in-depth analysis, or thought-provoking commentary, iReport is your go-to source
            for staying informed and connected to the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
