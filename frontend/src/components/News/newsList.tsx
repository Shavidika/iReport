import React, { useState, useEffect } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getPublishedArticles } from "../../slices/articleSlice";
import { getUser } from "../../slices/authSlice";
import ArticleCard from "./articleCard";

const NewsCard: React.FC = () => {

  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.articles.articles);

  // useEffect(() => {
  //   articles.forEach((article) => {
  //     dispatch(getUser(article.authorName));
  //   });
  // }, [articles, dispatch]);

  useEffect(() => {
    dispatch(getPublishedArticles());
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

export default NewsCard;
