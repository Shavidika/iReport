// NewsSection.tsx
import React from 'react';

const NewsSection = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">News</h2>
      <ul>
        <li className="py-2 px-4">Pending</li>
        <li className="py-2 px-4">Approved</li>
        <li className="py-2 px-4">Declined</li>
      </ul>
    </div>
  );
};

export default NewsSection;