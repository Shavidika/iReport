// ReportersSection.tsx
import React, { useDeferredValue, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { getPublishedArticles } from '../../slices/articleSlice';
import ArticleCard from '../../components/News/articleCard';

const ReportersSection = () => {
  const dispatch = useAppDispatch();
  const publishedArticles = useAppSelector((state) => state.articles.articles);
  
  useEffect(() => {
    dispatch(getPublishedArticles());
  }, []);

  return (
    <section className="bg-gray-100 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-7 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {publishedArticles.map((item) => (
            <ArticleCard
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReportersSection;