import { useState } from "react";
import React from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { declineArticle, publishArticle } from "../../slices/articleSlice";
import { toast } from 'react-toastify'; 
interface ArticleCardProps {
  item: any;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ item }) => {
  const [downvotedArticles, setDownvotedArticles] = useState<string[]>([]);
  const [upvotedArticles, setUpvotedArticles] = useState<string[]>([]);
  const [isUpvoteHovered, setIsUpvoteHovered] = useState<boolean>(false);
  const [isDownvoteHovered, setIsDownvoteHovered] = useState<boolean>(false);
  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);

  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.articles.articles);

  const avatarImageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png";

  const handleUpvote = (articleId: string) => {
    if (!upvotedArticles.includes(articleId)) {
      setUpvotedArticles([...upvotedArticles, articleId]);
      setDownvotedArticles(downvotedArticles.filter((id) => id !== articleId));
    } else {
      setUpvotedArticles(upvotedArticles.filter((id) => id !== articleId));
    }
  };

  const handleDownvote = (articleId: string) => {
    if (!downvotedArticles.includes(articleId)) {
      setDownvotedArticles([...downvotedArticles, articleId]);
      setUpvotedArticles(upvotedArticles.filter((id) => id !== articleId));
    } else {
      setDownvotedArticles(downvotedArticles.filter((id) => id !== articleId));
    }
  };

  const handleDecline = () => {
    dispatch(declineArticle(item.id));
  };

  const handlePublish = () => {
    dispatch(publishArticle(item.id));
  };

  // const DeclineArticle =async (id:string) => {
  //   const response = await dispatch(declineArticle(id));

  //   if (response.status === 200) {
  //     toast.success("The article successfully unpublished");
  //     setArticles(articles.filter(article => article.id !== id));
  //   } else {
  //     toast.error("Failed to unpublish the article");
  //   }
  
  //   console.log(response);
  //   return;
  // };

  return (
    <article
      key={item.id}
      className="p-6 bg-white rounded-lg border border-gray-200 shadow-md relative overflow-auto"
    >
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <div className="flex items-center space-x-4">
          <img
            className="w-7 h-7 rounded-full"
            src={item.authorImage || avatarImageUrl}
            alt={item.authorName || "Anonymous"}
          />
          <span className="font-medium text-gray-900">
            {item.authorName || "Anonymous"}
          </span>
        </div>
      </div>
      <div className="mb-5">
        <img
          className="w-full h-56 object-cover rounded-lg"
          src={item.articleImage}
          alt={item.title}
        />
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        <a href="#">{item.title}</a>
      </h2>
      <p className="mb-5 font-light text-gray-500 h-36 overflow-clip">
        {item.content}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {basicUserInfo?.roles.includes("ADMIN") ? (
            <div>
              {item.status == "published" ? (
                <button 
                onClick={handleDecline}
                className="px-3  py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-0 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                  Unpublish
                </button>
              ) : (
                <div>
                  {item.status == "submitted" ?(
                    <div className="flex items-center space-x-4">
                    <button
                    onClick={handlePublish} 
                    className="px-3  py-2 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-0 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                      Publish
                    </button>
                    <button
                    onClick={handleDecline}
                    className="px-3  py-2 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-0 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                      Decline
                    </button>
                    </div>
                  ):(
                    <div>
                    <button 
                    onClick={handlePublish}
                    className="px-3  py-2 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-0 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                      Publish
                    </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <button
                className={`flex items-center space-x-1 text-blue-500 ${
                  upvotedArticles.includes(item.id)
                    ? "text-blue-500"
                    : "text-gray-500"
                }`}
                onMouseEnter={() => setIsUpvoteHovered(true)}
                onMouseLeave={() => setIsUpvoteHovered(false)}
                onClick={() => handleUpvote(item.id)}
                style={{
                  transform: isUpvoteHovered ? "scale(1.1)" : "scale(1)",
                }}
              >
                <FaThumbsUp />
              </button>
              <button
                className={`flex items-center space-x-1 text-gray-500 ${
                  downvotedArticles.includes(item.id)
                    ? "text-red-500"
                    : "text-gray-500"
                }`}
                onMouseEnter={() => setIsDownvoteHovered(true)}
                onMouseLeave={() => setIsDownvoteHovered(false)}
                onClick={() => handleDownvote(item.id)}
                style={{
                  transform: isDownvoteHovered ? "scale(1.1)" : "scale(1)",
                }}
              >
                <FaThumbsDown />
              </button>
            </div>
          )}
        </div>
        <a
          href="#"
          className="inline-flex items-center font-medium text-primary-600 :text-primary-500 hover:underline"
        >
          Read more
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </article>
  );
};

export default ArticleCard;
