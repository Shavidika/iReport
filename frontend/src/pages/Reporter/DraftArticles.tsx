import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { getAllArticles, getDraftArticles, getPublishedArticles, getSubmittedArticles } from '../../slices/articleSlice';

const DraftArticles: React.FC = () => {

    const dispatch = useAppDispatch();
    const articles = useAppSelector((state) => state.articles.articles);
    const [articleStatusChanged, setArticleStatusChanged] = useState(false);
    
    useEffect(() => {
      dispatch(getDraftArticles());
      setArticleStatusChanged(false);
    }, [articleStatusChanged]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Draft Articles</h2>
      <ul>
        {articles.map((draft) => (
          <li key={draft.id} className="mb-4 p-4 border rounded-lg bg-white shadow">
            <h3 className="text-xl font-bold">{draft.title}</h3>
            <p className="text-gray-700">{draft.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DraftArticles;
