// src/pages/Sport.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Import the Header component

// Define the article data for Sport News
const articles = [
  {
    id: 1,
    title: 'Top Sporting Events of the Year',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum erat vitae tellus fringilla, a dapibus mi luctus. Nulla facilisi.',
    author: 'John Doe',
    date: 'June 25, 2024',
    image: 'https://www.redasiainsurance.com/wp-content/uploads/2022/02/Sports-events-insurance-Main-scaled-e1644805433386.jpg', // Example image URL
    slug: 'top-sporting-events',
    category: 'sport',
  },
  {
    id: 2,
    title: 'Athlete Spotlight: Rising Stars',
    content:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst.',
    author: 'Jane Smith',
    date: 'June 26, 2024',
    image: 'https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg', // Example image URL
    slug: 'athlete-spotlight',
    category: 'sport',
  },
  {
    id: 3,
    title: 'Fitness and Wellness Tips for Athletes',
    content:
      'Sed euismod ligula eget finibus suscipit. Vivamus elementum varius odio, nec lobortis ipsum scelerisque ut. Aenean vel mauris id ipsum vehicula faucibus.',
    author: 'Alex Johnson',
    date: 'June 27, 2024',
    image: 'https://www.meritain.com/wp-content/uploads/2022/01/Image_Health-tips-for-the-gym_0122.jpg', // Example image URL
    slug: 'fitness-wellness-tips',
    category: 'sport',
  },
  // Additional articles
  {
    id: 4,
    title: 'The Evolution of Extreme Sports',
    content:
      'Fusce vel elementum purus, eu commodo augue. Integer gravida risus eget dolor consequat, in suscipit mi ultricies.',
    author: 'Emily Brown',
    date: 'July 3, 2024',
    image: 'https://theindianface.com/cdn/shop/articles/Documental-sobre-la-evolucion-de-los-deportes-extremos-en-Canal-Historia.jpg?v=1590404424', // Example image URL
    slug: 'evolution-of-extreme-sports',
    category: 'sport',
  },
  {
    id: 5,
    title: 'New Trends in Sports Nutrition',
    content:
      'Donec ullamcorper, sapien sed lobortis auctor, ipsum sapien vestibulum ligula, ac fermentum ipsum mi et justo.',
    author: 'Michael Johnson',
    date: 'July 4, 2024',
    image: 'https://www.foodmanufacture.co.uk/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodmanufacture.co.uk/article/2022/05/11/2022-sports-nutrition-trends/15405772-1-eng-GB/2022-sports-nutrition-trends.jpg', // Example image URL
    slug: 'trends-in-sports-nutrition',
    category: 'sport',
  },
  {
    id: 6,
    title: 'Impact of Technology on Sports Training',
    content:
      'Curabitur nec volutpat sem, vitae facilisis lorem. Duis fringilla risus non justo tristique rutrum.',
    author: 'Emma Watson',
    date: 'July 5, 2024',
    image: 'https://media.licdn.com/dms/image/D4D12AQG9GNd88H52sQ/article-cover_image-shrink_720_1280/0/1705485081318?e=2147483647&v=beta&t=AaCCwsHwYTP0PgTMAQeSh3reRP4yiUvOWqfVaA8QhZI', // Example image URL
    slug: 'impact-of-technology-on-sports',
    category: 'sport',
  },
];

// Define video news data
const videoNews = [
  {
    id: 1,
    title: 'Top 10 Sporting Moments of the Decade',
    author: 'Sports Highlights',
    date: 'July 10, 2024',
    content:
      'Watch this video to relive the top 10 sporting moments that defined the last decade in sports history.',
    embedUrl: 'https://www.youtube.com/embed/oBtPDJ8d1K4', // Example YouTube embed URL
  },
  {
    id: 2,
    title: 'Best Sports Performances of the Year',
    author: 'Sports Excellence',
    date: 'July 11, 2024',
    content:
      'Experience the best sports performances of the year across various sports disciplines and events.',
    embedUrl: 'https://www.youtube.com/embed/2cGiy5RYYKw', // Example YouTube embed URL
  },
];

const Sport: React.FC = () => {
  const [subscriberName, setSubscriberName] = useState<string>('');
  const [subscriberEmail, setSubscriberEmail] = useState<string>('');

  // Calculate last updated date
  const lastUpdated = articles.reduce((prev, current) => {
    const currentDateTime = new Date(current.date);
    return prev < currentDateTime ? currentDateTime : prev;
  }, new Date(articles[0].date));

  // Format last updated date
  const formattedLastUpdated = `${lastUpdated.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}`;

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would handle the subscription logic, e.g., sending data to a server or storing locally
    alert(`Subscribed ${subscriberName} (${subscriberEmail})`);
    setSubscriberName('');
    setSubscriberEmail('');
  };

  return (
    <div className="min-h-screen">
      <Header /> {/* Add the Header component */}
      <div className="container mx-auto p-6 pt-24">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 px-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Sport News</h1>
              <p className="text-lg mt-2">Discover the latest updates and articles on sports.</p>
            </div>
            <Link to="/" className="text-white hover:underline">
              Back to Home
            </Link>
          </div>
          <p className="text-sm mt-2">Last Updated: {formattedLastUpdated}</p>
        </div>

        {/* Video News Sections */}
        <div className="grid gap-6 mb-8">
          {videoNews.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
                <p className="text-gray-600">{video.content}</p>
                <div className="flex items-center mt-4">
                  <p className="text-gray-500 text-sm">By {video.author}</p>
                  <p className="text-gray-500 text-sm ml-auto">{video.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Articles Section */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={article.image} alt={article.title} className="h-40 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-4">{article.content}</p>
              </div>
              <div className="bg-gray-100 px-6 py-3">
                <p className="text-gray-500 text-sm">By {article.author}</p>
                <p className="text-gray-500 text-sm">{article.date}</p>
                <Link
                  to={`/sport/${article.slug}`}
                  className="text-blue-600 hover:underline block mt-2"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-lg font-semibold mb-2">Subscribe to Sport News Updates</h2>
          <p className="text-gray-600 mb-4">
            Stay updated with our latest articles and news updates on sports topics by subscribing to our newsletter.
          </p>
          <form onSubmit={handleSubscribe}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={subscriberName}
                onChange={(e) => setSubscriberName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sport;

