// src/components/SubmittedArticles.tsx
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { getSubmittedArticles } from '../../slices/articleSlice';

interface SubmittedArticlesProps {
  onSubmittedClick: (article: { id: string, title: string, content: string }) => void;
  onComposeClick: () => void;
}

const SubmittedArticles: React.FC<SubmittedArticlesProps> = ({ onSubmittedClick, onComposeClick }) => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.articles.articles);
  const [articleStatusChanged, setArticleStatusChanged] = useState(false);

  useEffect(() => {
    dispatch(getSubmittedArticles());
    setArticleStatusChanged(false);
  }, [articleStatusChanged, dispatch, articles]);

  return (
    <div className="bg-white rounded-3xl shadow-2xl border-2">
      <div className="flex justify-end mt-4 me-4">
        <button
          type="button"
          className="text-black border-2 border-black bg-gray-100 hover:bg-blue-500 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
          onClick={onComposeClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <div className="m-5 mt-2 overflow-auto">
        <h2 className="text-2xl font-semibold mb-4">Submitted Articles</h2>
        <ul>
          {articles.map((article) => (
            <li
              key={article.id}
              className="mb-4 p-4 border rounded-lg bg-white shadow cursor-pointer"
              onClick={() => onSubmittedClick({ id: article.id, title: article.title ?? '', content: article.content ?? '' })}
            >
              <h3 className="text-xl font-bold">{article.title}</h3>
              <p className="text-gray-700">{article.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubmittedArticles;
