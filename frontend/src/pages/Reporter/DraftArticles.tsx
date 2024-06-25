import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { getDraftArticles } from '../../slices/articleSlice';

interface DraftArticlesProps {
  onDraftClick: (article: { id: string, title: string, content: string }) => void;
}

const DraftArticles: React.FC<DraftArticlesProps> = ({ onDraftClick }) => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.articles.articles);

  useEffect(() => {
    dispatch(getDraftArticles());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Draft Articles</h2>
      <ul>
        {articles.map((draft) => (
          <li 
            key={draft.id} 
            className="mb-4 p-4 border rounded-lg bg-white shadow cursor-pointer"
            onClick={() => onDraftClick({ id: draft.id, title: draft.title ?? '', content: draft.content ?? '' })}
          >
            <h3 className="text-xl font-bold">{draft.title ?? 'No title'}</h3>
            <p className="text-gray-700">{draft.content?.substring(0, 100) ?? 'No content'}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DraftArticles;
