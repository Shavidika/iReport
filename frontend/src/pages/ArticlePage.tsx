// src/pages/ArticlePage.tsx

import React from 'react';
import { useParams } from 'react-router-dom';

const ArticlePage: React.FC = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();

  if (!slug) {
    return <div>Loading...</div>; // Handle case where slug is undefined or not provided
  }

  // Example: Fetch article content based on the category and slug
  // Replace with actual logic to fetch and display article content

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{slug.replace(/-/g, ' ')}</h1>
      <p>This is the content of the article. Replace with actual content based on the slug.</p>
    </div>
  );
};

export default ArticlePage;
