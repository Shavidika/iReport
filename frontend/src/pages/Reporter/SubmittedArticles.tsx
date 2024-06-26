import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  getSubmittedArticles,
  deleteArticle,
  ArticleInfo,
} from "../../slices/articleSlice";
import ArticlePopup from "../../components/Reporter/ArticlePopup";
import DraftArticles from "./DraftArticles";

interface SubmittedArticlesProps {
  articles: ArticleInfo[];
  onSubmittedClick: (article: {
    id: string;
    title: string;
    content: string;
    articleImage?: string;
  }) => void;
  onComposeClick: () => void;
  className?: string;
}

const SubmittedArticles: React.FC<SubmittedArticlesProps> = ({
  articles,
  onSubmittedClick,
  onComposeClick,
  className,
}) => {
  const dispatch = useAppDispatch();
  const [selectedArticle, setSelectedArticle] = useState<{
    id: string;
    title: string;
    content: string;
    articleImage?: string;
  } | null>(null);

  useEffect(() => {
    dispatch(getSubmittedArticles());
  }, [dispatch,articles,DraftArticles]);

  const handleArticleClick = (article: {
    id: string;
    title: string;
    content: string;
    articleImage?: string;
  }) => {
    setSelectedArticle(article);
  };

  const handlePopupClose = () => {
    setSelectedArticle(null);
  };

  return (
    <div className={`bg-white rounded-3xl shadow-2xl border-2 ${className}`}>
      <div className="flex justify-center mt-4 me-4">
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
        <h2 className="text-2xl font-bold text-center bg-gray-200 mb-4">
          Submitted Articles
        </h2>
        {articles.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <p>No submitted articles available</p>
            <p className="text-xs">Click the + button to add a new article</p>
          </div>
        ) : (
          articles.map((article, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b border-gray-200 py-2 hover:bg-gray-200 cursor-pointer m-2 p-3 rounded-md"
              onClick={() =>
                handleArticleClick({
                  id: article.id,
                  title: article.title ?? "",
                  content: article.content ?? "",
                  articleImage: article.articleImage ?? "",
                })
              }
            >
              <div className="mr-10">
                <h3 className="text-xl font-bold">
                  {article.title
                    ? `${article.title.substring(0, 100)}...`
                    : "No title"}
                </h3>
                <p className="text-gray-700">
                  {article.content
                    ? `${article.content.substring(0, 70)}...`
                    : "No content"}
                </p>
              </div>
              {/* <div>
                <button
                  onClick={(event) => handleDelete(event, article.id)}
                  className="text-black border-2 scale-75 border-black bg-gray-100 hover:bg-red-500 hover:border-gray-100 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2"
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
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.02-2.09 2.201v.916m7.5 0a48.068 48.068 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
          ))
        )}
      </div>
      {selectedArticle && (
        <ArticlePopup article={selectedArticle} onClose={handlePopupClose} />
      )}
    </div>
  );
};

export default SubmittedArticles;
