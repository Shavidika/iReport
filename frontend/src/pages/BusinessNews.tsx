// src/pages/BusinessNews.tsx

import React from 'react';
import { Link } from 'react-router-dom';

// Define the article data
const articles = [
  {
    id: 1,
    title: 'New Business Strategy Unveiled',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum erat vitae tellus fringilla, a dapibus mi luctus. Nulla facilisi.',
    author: 'John Doe',
    date: 'June 25, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'new-business-strategy',
    category: 'business',
  },
  {
    id: 2,
    title: 'Global Market Trends for 2024',
    content:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst.',
    author: 'Jane Smith',
    date: 'June 26, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'global-market-trends',
    category: 'business',
  },
  {
    id: 3,
    title: 'Impact of Digital Transformation on Businesses',
    content:
      'Sed euismod ligula eget finibus suscipit. Vivamus elementum varius odio, nec lobortis ipsum scelerisque ut. Aenean vel mauris id ipsum vehicula faucibus.',
    author: 'Alex Johnson',
    date: 'June 27, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'digital-transformation-impact',
    category: 'business',
  },
];

const BusinessNews: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Business News</h1>
      <p>Welcome to the Business News page. Here you will find the latest updates and articles on business.</p>
      <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
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
    </div>
  );
};

export default BusinessNews;
