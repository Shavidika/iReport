import React from "react";
import { useNavigate } from "react-router-dom";
import exerciseImage from "../Assets\UserImage.png"; // Import exercise image
import smartphoneImage from "../Assets\UserImage.png"; // Import smartphone image
import summitImage from "../Assets\UserImage.png"; // Import summit image

interface NewsItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/login");
  };

  // Sample news data
  const newsData: NewsItem[] = [
    {
      id: 1,
      title: "New Study Shows Benefits of Regular Exercise",
      image: exerciseImage,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 2,
      title: "Tech Giant Unveils Latest Smartphone Model",
      image: smartphoneImage,
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse...",
    },
    {
      id: 3,
      title: "Global Summit Addresses Climate Change Crisis",
      image: summitImage,
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <header className="mb-10">
        <img
          src="https://i.ibb.co/dPftDQN/Logo.png"
          alt="iReport Logo"
          className="h-16 w-auto mb-4"
        />
        <nav className="flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-300">
            World
          </a>
          <a href="#" className="hover:text-gray-300">
            Politics
          </a>
          <a href="#" className="hover:text-gray-300">
            Technology
          </a>
          <a href="#" className="hover:text-gray-300">
            Business
          </a>
          <a href="#" className="hover:text-gray-300">
            Sports
          </a>
        </nav>
      </header>
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to iReport</h1>
        <p className="text-lg mb-6">Your trusted source for reliable news</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Render news cards */}
          {newsData.map((news) => (
            <div key={news.id} className="bg-gray-800 rounded-lg p-4">
              <img src={news.image} alt={news.title} className="rounded-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
              <p className="text-gray-300">{news.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <button
          className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-red-500 mt-8 transition-colors duration-300"
          onClick={handleSignUpClick}
        >
          Log In to Read More
        </button>
      </main>
    </div>
  );
};

export default HomePage;
