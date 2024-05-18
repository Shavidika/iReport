// src/components/SubmittedArticles.tsx
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { getSubmittedArticles } from '../../slices/articleSlice';

const SubmittedArticles: React.FC = () => {

    const dispatch = useAppDispatch();
    const articles = useAppSelector((state) => state.articles.articles);
    const [articleStatusChanged, setArticleStatusChanged] = useState(false);
    
    useEffect(() => {
      dispatch(getSubmittedArticles());
      setArticleStatusChanged(false);
    }, [articleStatusChanged]);

//   const submitted = [
//     { id: 1, title: 'Submitted Article 1', content: 'This is the content of submitted article 1.' },
//     { id: 2, title: 'Submitted Article 2', content: 'This is the content of submitted article 2.' },
//   ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Submitted Articles</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id} className="mb-4 p-4 border rounded-lg bg-white shadow">
            <h3 className="text-xl font-bold">{article.title}</h3>
            <p className="text-gray-700">{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubmittedArticles;
