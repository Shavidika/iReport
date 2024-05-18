// OverallSection.tsx
import React, { useEffect } from 'react';
import KanbanChart from '../../components/Admin/NewsKanban';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { getDeclinedArticles } from '../../slices/articleSlice';
import ArticleCard from '../../components/News/articleCard';

const OverallSection = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.articles.articles);
  
  useEffect(() => {
    dispatch(getDeclinedArticles());
  }, []);

  return (
    <section className="bg-gray-100 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-7 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {articles.map((item) => (
            <ArticleCard
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverallSection;