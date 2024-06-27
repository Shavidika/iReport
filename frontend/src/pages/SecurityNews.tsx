// src/pages/SecurityNews.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Define the article data for Security News
const articles = [
  {
    id: 1,
    title: 'Enhanced Security Measures Implemented',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum erat vitae tellus fringilla, a dapibus mi luctus. Nulla facilisi.',
    author: 'John Doe',
    date: 'June 25, 2024',
    image: 'https://smartphonemagazine.nl/wp-content/uploads/2024/06/compressed_img-2nzDjBwjNuXWZhfO41j4SzJv.png', // Example image URL
    slug: 'enhanced-security-measures',
    category: 'security',
  },
  {
    id: 2,
    title: 'Cybersecurity Trends for 2024',
    content:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst.',
    author: 'Jane Smith',
    date: 'June 26, 2024',
    image: 'https://media.licdn.com/dms/image/D5612AQE32z103yICGw/article-cover_image-shrink_720_1280/0/1698629760965?e=2147483647&v=beta&t=7lCZskuHaCzeyn0rAFqrE4zKocYjOHFqEV8GdIsXINw', // Example image URL
    slug: 'cybersecurity-trends',
    category: 'security',
  },
  {
    id: 3,
    title: 'Importance of Data Privacy in Modern Age',
    content:
      'Sed euismod ligula eget finibus suscipit. Vivamus elementum varius odio, nec lobortis ipsum scelerisque ut. Aenean vel mauris id ipsum vehicula faucibus.',
    author: 'Alex Johnson',
    date: 'June 27, 2024',
    image: 'https://cdn.techwireasia.com/wp-content/uploads/2023/01/shutterstock_1875135925-scaled.jpg', // Example image URL
    slug: 'data-privacy-importance',
    category: 'security',
  },
  // Additional articles
  {
    id: 4,
    title: 'Emerging Threats in Mobile Security',
    content:
      'Fusce vel elementum purus, eu commodo augue. Integer gravida risus eget dolor consequat, in suscipit mi ultricies.',
    author: 'Emily Brown',
    date: 'July 3, 2024',
    image: 'https://media.product.which.co.uk/prod/images/original/cee936f60f5f-antivirus-mobile.jpg', // Example image URL
    slug: 'emerging-threats-mobile-security',
    category: 'security',
  },
  {
    id: 5,
    title: 'The Role of AI in Cyber Defense',
    content:
      'Donec ullamcorper, sapien sed lobortis auctor, ipsum sapien vestibulum ligula, ac fermentum ipsum mi et justo.',
    author: 'Michael Johnson',
    date: 'July 4, 2024',
    image: 'https://www.fornetix.com/wp-content/uploads/2022/09/blog-cyberdefense.jpg', // Example image URL
    slug: 'role-of-ai-cyber-defense',
    category: 'security',
  },
  {
    id: 6,
    title: 'Challenges in Securing IoT Devices',
    content:
      'Curabitur nec volutpat sem, vitae facilisis lorem. Duis fringilla risus non justo tristique rutrum.',
    author: 'Emma Watson',
    date: 'July 5, 2024',
    image: 'https://mlfk3cv5yvnx.i.optimole.com/cb:k-rC.2fd1d/w:auto/h:auto/q:mauto/f:best/https://www.ninjaone.com/wp-content/uploads/2023/10/N1-0668-Securing-IoT-Devices-blog-image.png', // Example image URL
    slug: 'challenges-securing-iot-devices',
    category: 'security',
  },
];

// Define video news data
const videoNews = [
  {
    id: 1,
    title: 'Latest Security Threats Explained',
    author: 'Security Insights',
    date: 'July 10, 2024',
    content:
      'Watch this video to understand the latest security threats affecting businesses and individuals worldwide.',
    embedUrl: 'https://www.youtube.com/embed/oBtPDJ8d1K4', // Example YouTube embed URL
  },
  {
    id: 2,
    title: 'Cybersecurity Best Practices',
    author: 'Cyber Defense Experts',
    date: 'July 11, 2024',
    content:
      'Learn about essential cybersecurity practices and how they can protect your data and systems from cyber attacks.',
    embedUrl: 'https://www.youtube.com/embed/2cGiy5RYYKw', // Example YouTube embed URL
  },
];

const SecurityNews: React.FC = () => {
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
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-4 px-6 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Security News</h1>
            <p className="text-lg mt-2">Stay informed with the latest updates and articles on security.</p>
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
                to={`/${article.category}/${article.slug}`}
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
        <h2 className="text-lg font-semibold mb-2">Subscribe to Security News Updates</h2>
        <p className="text-gray-600 mb-4">
          Stay updated with our latest articles and news updates on security topics by subscribing to our newsletter.
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
  );
};

export default SecurityNews;
