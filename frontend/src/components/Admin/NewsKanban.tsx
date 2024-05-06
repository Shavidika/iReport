import React, { useEffect } from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import {
    getAllArticles,
  getPublishedArticles,
  getSubmittedArticles,
} from "../../slices/articleSlice";
import { getUser } from "../../slices/authSlice";

const KanbanChart = () => {
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.articles.articles);

  useEffect(() => {
    dispatch(getAllArticles());
  }, [articles]);

  //   const [cards, setCards] = useState([
  //     { id: 1, title: "Card 1", status: "pending" },
  //     { id: 2, title: "Card 2", status: "pending" },
  //     { id: 3, title: "Card 3", status: "approved" },
  //     { id: 4, title: "Card 4", status: "declined" },
  //   ]);

  const handleArticleMove = (cardId: number, newStatus: string) => {
    
    // setCards(
    //   cards.map((card) =>
    //     card.id === cardId ? { ...card, status: newStatus } : card
    //   )
    // );
  };

  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/3 xl:w-1/4 p-6">
        <h2 className="text-lg font-bold mb-4">Pending</h2>
        <ul className="list-none mb-4">
          {articles
            .filter((article) => article.status === "submitted")
            .map((article) => (
              <li
                key={article.id}
                className="bg-white shadow-md rounded p-4 mb-4"
              >
                <h3 className="text-lg font-bold">{article.title}</h3>
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() =>
                    handleArticleMove(Number(article.id), "approved")
                  }
                >
                  Approve
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() =>
                    handleArticleMove(Number(article.id), "declined")
                  }
                >
                  Decline
                </button>
              </li>
            ))}
        </ul>
      </div>
      <div className="w-full md:w-1/3 xl:w-1/4 p-6">
        <h2 className="text-lg font-bold mb-4">Approved</h2>
        <ul className="list-none mb-4">
          {articles
            .filter((article) => article.status === "published")
            .map((article) => (
              <li
                key={article.id}
                className="bg-white shadow-md rounded p-4 mb-4"
              >
                <h3 className="text-lg font-bold">{article.title}</h3>
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() =>
                    handleArticleMove(Number(article.id), "pending")
                  }
                >
                  Send back to pending
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() =>
                    handleArticleMove(Number(article.id), "declined")
                  }
                >
                  Decline
                </button>
              </li>
            ))}
        </ul>
      </div>
      <div className="w-full md:w-1/3 xl:w-1/4 p-6">
        <h2 className="text-lg font-bold mb-4">Declined</h2>
        <ul className="list-none mb-4">
          {articles
            .filter((article) => article.status == "declined")
            .map((article) => (
              <li
                key={article.id}
                className="bg-white shadow-md rounded p-4 mb-4"
              >
                <h3 className="text-lg font-bold">{article.status}</h3>
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() =>
                    handleArticleMove(Number(article.id), "pending")
                  }
                >
                  Send back to pending
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default KanbanChart;
