import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const articles = [
  {
    id: 105,
    authorName: "Jese Leos",
    title: "sri lanka won the match",
    content:
      "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.",
    articleImage: "https://i.ibb.co/FBSRxms/SL-won.jpg",
  },
  {
    id: 106,
    title: "sri lanka won the match1",
    content:
      "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.",
    articleImage: "https://i.ibb.co/FBSRxms/SL-won.jpg",
  },
  {
    id: 107,
    title: "sri lanka won the match1",
    content:
      "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.",
    articleImage: "https://i.ibb.co/FBSRxms/SL-won.jpg",
  },
];

const NewsCard: React.FC = () => {
  const [upvotedArticles, setUpvotedArticles] = useState<number[]>([]);
  const [downvotedArticles, setDownvotedArticles] = useState<number[]>([]);

  const handleUpvote = (articleId: number) => {
    if (!upvotedArticles.includes(articleId)) {
      setUpvotedArticles([...upvotedArticles, articleId]);
      setDownvotedArticles(downvotedArticles.filter((id) => id !== articleId));
    } else {
      setUpvotedArticles(upvotedArticles.filter((id) => id !== articleId));
    }
  };

  const handleDownvote = (articleId: number) => {
    if (!downvotedArticles.includes(articleId)) {
      setDownvotedArticles([...downvotedArticles, articleId]);
      setUpvotedArticles(upvotedArticles.filter((id) => id !== articleId));
    } else {
      setDownvotedArticles(downvotedArticles.filter((id) => id !== articleId));
    }
  };

  return (
    <section className="bg-gray-100 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-7 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {articles.map((item) => (
            <article
              key={item.id}
              className="p-6 bg-white rounded-lg border border-gray-200 shadow-md relative"
            >
              <div className="flex justify-between items-center mb-5 text-gray-500">
                <div className="flex items-center space-x-4">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Jese Leos avatar"
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
              <p className="mb-5 font-light text-gray-500">{item.content}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <button
                    className={`flex items-center space-x-1 text-gray-500 hover:text-blue-500 ${
                      upvotedArticles.includes(item.id) ? "text-blue-500" : ""
                    }`}
                    onClick={() => handleUpvote(item.id)}
                  >
                    <FaThumbsUp />
                  </button>
                  <button
                    className={`flex items-center space-x-1 text-gray-500 hover:text-red-500 ${
                      downvotedArticles.includes(item.id) ? "text-red-500" : ""
                    }`}
                    onClick={() => handleDownvote(item.id)}
                  >
                    <FaThumbsDown />
                  </button>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
