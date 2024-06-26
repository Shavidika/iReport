import React from 'react';

interface Article {
  id: string;
  title: string;
  content: string;
  image?: string;
}

interface ArticlePopupProps {
  article: Article | null;
  onClose: () => void;
}

const ArticlePopup: React.FC<ArticlePopupProps> = ({ article, onClose }) => {
  if (!article) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-3xl w-96">
        <div className="flex content-center justify-center">
          <h2 className="text-xl font-bold mb-4">{article.title.substring(0, 50)}</h2>
        </div>
        {article.image && (
          <div className="mb-4 flex justify-center">
            <img src={article.image} alt="Article" className="max-w-xs h-auto rounded-lg" />
          </div>
        )}
        <p className="mb-4">{article.content.substring(0, 200)}</p>
        <div className="flex justify-center mt-5">
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

export default ArticlePopup;
