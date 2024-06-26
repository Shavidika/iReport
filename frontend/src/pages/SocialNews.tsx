// src/pages/SocialNews.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Define the article data for Social News
const articles = [
  {
    id: 1,
    title: 'Impact of Social Media on Modern Society',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum erat vitae tellus fringilla, a dapibus mi luctus. Nulla facilisi.',
    author: 'John Doe',
    date: 'June 25, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'impact-of-social-media',
    category: 'social',
  },
  {
    id: 2,
    title: 'The Rise of Influencer Marketing',
    content:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst.',
    author: 'Jane Smith',
    date: 'June 26, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'influencer-marketing-rise',
    category: 'social',
  },
  {
    id: 3,
    title: 'Ethical Issues in Social Media Usage',
    content:
      'Sed euismod ligula eget finibus suscipit. Vivamus elementum varius odio, nec lobortis ipsum scelerisque ut. Aenean vel mauris id ipsum vehicula faucibus.',
    author: 'Alex Johnson',
    date: 'June 27, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'ethical-issues-social-media',
    category: 'social',
  },
  // Additional articles
  {
    id: 4,
    title: 'The Future of Social Networks',
    content:
      'Fusce vel elementum purus, eu commodo augue. Integer gravida risus eget dolor consequat, in suscipit mi ultricies.',
    author: 'Emily Brown',
    date: 'July 3, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'future-of-social-networks',
    category: 'social',
  },
  {
    id: 5,
    title: 'Privacy Concerns in Online Communities',
    content:
      'Donec ullamcorper, sapien sed lobortis auctor, ipsum sapien vestibulum ligula, ac fermentum ipsum mi et justo.',
    author: 'Michael Johnson',
    date: 'July 4, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'privacy-concerns-online-communities',
    category: 'social',
  },
  {
    id: 6,
    title: 'The Role of Social Media in Political Movements',
    content:
      'Curabitur nec volutpat sem, vitae facilisis lorem. Duis fringilla risus non justo tristique rutrum.',
    author: 'Emma Watson',
    date: 'July 5, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'role-of-social-media-political-movements',
    category: 'social',
  },
];

const SocialNews: React.FC = () => {
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
      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 px-6 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Social News</h1>
            <p className="text-lg mt-2">Stay informed with the latest updates and articles on social topics.</p>
          </div>
          <Link to="/" className="text-white hover:underline">
            Back to Home
          </Link>
        </div>
        <p className="text-sm mt-2">Last Updated: {formattedLastUpdated}</p>
      </div>

      {/* First YouTube Video Section */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-2">The Impact of Social Media</h2>
            <p className="text-gray-600 mb-4">
              Discover how social media platforms are influencing society and shaping cultural norms.
            </p>
            <div className="flex justify-between items-center mt-2">
              <Link
                to={`/social/main-news`}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
              >
                Go to the Article
              </Link>
            </div>
          </div>
        </div>
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

      {/* Second YouTube Video Section */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-2">Trends in Social Media Marketing</h2>
            <p className="text-gray-600 mb-4">
              Explore the latest trends in digital marketing and how social media platforms are reshaping advertising strategies.
            </p>
            <div className="flex justify-between items-center mt-2">
              <Link
                to={`/social/latest-news`}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
              >
                Go to the Article
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-2">Subscribe to Social News Updates</h2>
        <p className="text-gray-600 mb-4">
          Stay updated with our latest articles and news updates on social topics by subscribing to our newsletter.
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

export default SocialNews;
