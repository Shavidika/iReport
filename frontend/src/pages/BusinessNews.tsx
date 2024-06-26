// src/pages/BusinessNews.tsx

import React from 'react';
import { Link } from 'react-router-dom';

// Define the article data
const articles = [
  {
    id: 1,
    title: 'New Business Strategy Unveiled',
    content: `
      In a bold move aimed at redefining its impact on global youth development and leadership, AIESEC has unveiled its latest business strategy. The strategy, developed through extensive research and collaboration with key stakeholders, outlines a visionary roadmap to address contemporary challenges and opportunities in the youth leadership space.
      Enhanced Global Reach: Expansion into new regions and communities to empower more young leaders worldwide.
      Stay tuned as AIESEC embarks on this transformative journey to shape a brighter future for youth leadership worldwide.
    `,
    author: 'Sathsara Soysa',
    date: 'June 25, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'new-business-strategy',
    category: 'business',
  },
  {
    id: 2,
    title: 'Global Market Trends for 2024',
    content:
    'The year 2024 promises to be pivotal for global markets, marked by dynamic shifts and emerging trends that will redefine industries across the globe. One of the foremost trends anticipated is the accelerating pace of digital transformation. Companies worldwide are increasingly prioritizing environmental, social, and governance (ESG) factors, not just as a corporate responsibility but as a core driver of long-term value creation. This shift reflects a growing recognition of the interconnectedness between business success and sustainable practices and youth leadership worldwide.',
  author: 'Nimsara Pamoda',
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

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 px-6 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Business News</h1>
            <p className="text-lg mt-2">Explore the latest updates and trends in the world of business.</p>
          </div>
          <Link to="/" className="text-white hover:underline">
            Back to Home
          </Link>
        </div>
        <p className="text-sm mt-2">Last Updated: {formattedLastUpdated}</p>
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
    </div>
  );
};

export default BusinessNews;
