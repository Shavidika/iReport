// NewsSection.tsx
import React, { useEffect } from "react";
import NewsCard from "../../components/News/newsList";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getPublishedArticles, getSubmittedArticles } from "../../slices/articleSlice";
import ArticleCard from "../../components/News/articleCard";

const Submitted = () => {
  const dispatch = useAppDispatch();
  const submittedArticles = useAppSelector((state) => state.articles.articles);
  
  useEffect(() => {
    dispatch(getSubmittedArticles());
  }, []);

  return (
    <section className="bg-gray-100 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-7 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {submittedArticles.map((item) => (
            <ArticleCard
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Submitted;
