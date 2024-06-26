// src/pages/SocialNews.tsx

import React from 'react';
import { Link } from 'react-router-dom';

// Define the article data for Social News
const articles = [
  {
    id: 1,
    title: 'Impact of Social Media on Modern Society',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum erat vitae tellus fringilla, a dapibus mi luctus. Nulla facilisi.',
    slug: 'impact-of-social-media',
    category: 'social',
  },
  {
    id: 2,
    title: 'The Rise of Influencer Marketing',
    content:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst.',
    slug: 'influencer-marketing-rise',
    category: 'social',
  },
  {
    id: 3,
    title: 'Ethical Issues in Social Media Usage',
    content:
      'Sed euismod ligula eget finibus suscipit. Vivamus elementum varius odio, nec lobortis ipsum scelerisque ut. Aenean vel mauris id ipsum vehicula faucibus.',
    slug: 'ethical-issues-social-media',
    category: 'social',
  },
];

const SocialNews: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Social News</h1>
      <p>Welcome to the Social News page. Here you will find the latest updates and articles on social topics.</p>
      <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-4">{article.content}</p>
            <Link to={`/${article.category}/${article.slug}`} className="text-blue-600 hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialNews;
