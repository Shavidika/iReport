// src/components/ArticleViewPopup.tsx
import React from 'react';

interface ArticleViewPopupProps {
  article: { id: string, title: string, content: string } | null;
  onClose: () => void;
}

const ArticleViewPopup: React.FC<ArticleViewPopupProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl w-96">
        <div className="card">
          <h2 className="text-xl font-bold mb-4">{article.title}</h2>
          <p className="mb-2"><strong>Content:</strong></p>
          <p>{article.content}</p>
        </div>
        <div className="flex justify-center space-x-2 mt-5">
          <button
            onClick={onClose}
            className="bg-red-500 text-white rounded-full px-6 py-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleViewPopup;
