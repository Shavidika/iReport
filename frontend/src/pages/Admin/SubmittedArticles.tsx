// NewsSection.tsx
import React, { useEffect, useState } from "react";
import NewsCard from "../../components/News/newsList";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getPublishedArticles, getSubmittedArticles } from "../../slices/articleSlice";
import ArticleCard from "../../components/News/articleCard";

const Submitted = () => {
  const dispatch = useAppDispatch();
  const submittedArticles = useAppSelector((state) => state.articles.articles);
  const [articleStatusChanged, setArticleStatusChanged] = useState(false);
  
  useEffect(() => {
    dispatch(getSubmittedArticles());
    setArticleStatusChanged(false);
  }, [articleStatusChanged]);

  return (
    <section className="bg-gray-100 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-7 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {submittedArticles.map((item) => (
            <ArticleCard
              item={item}
              onArticleStatusChange={() => setArticleStatusChanged(true)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Submitted;
