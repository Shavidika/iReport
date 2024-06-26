import React, { useEffect, useState } from "react";
import DraftArticles from "./DraftArticles";
import SubmittedArticles from "./SubmittedArticles";
import ComposeArticleModal from "../../components/Reporter/ComposeArticle";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import {
  createEmptyDraft,
  getDraftArticles,
  getSubmittedArticles,
} from "../../slices/articleSlice";
import Header from "../../components/Header";

const Dashboard: React.FC = () => {
  const [isComposeOpen, setComposeOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<{
    id: string;
    title: string;
    content: string;
  }>({ id: "", title: "", content: "" });
  const dispatch = useAppDispatch();
  const draftArticles = useAppSelector((state) => state.articles.draftArticles);
  const submittedArticles = useAppSelector((state) => state.articles.articles);

  const handleComposeClick = async () => {
    const response = await dispatch(createEmptyDraft());
    if (createEmptyDraft.fulfilled.match(response)) {
      const id = response.payload.id;
      console.log(`New draft created with id ${id}`);
      setSelectedArticle({ id, title: "", content: "" });
    }
    setComposeOpen(true);
  };

  const handleDraftClick = (article: {
    id: string;
    title: string;
    content: string;
  }) => {
    setSelectedArticle(article);
    setComposeOpen(true);
  };

  const handleSubmittedClick = (article: {
    id: string;
    title: string;
    content: string;
  }) => {
    setSelectedArticle(article);
    setComposeOpen(true);
  };

  useEffect(() => {
    dispatch(getDraftArticles());
    dispatch(getSubmittedArticles());
  }, [dispatch]);

  return (
    <div>
      <Header />
      {/* <div className="flex justify-end mt-4 me-4">
        <button
          type="button"
          className="text-black border-2 border-black bg-gray-100 hover:bg-blue-500 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
          onClick={handleComposeClick}
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
      </div> */}
      <div className="flex mt-10 h-screen  bg-gray-100 justify-center items-center ">
        <div className="flex gap-10 w-full px-10">
          <DraftArticles
            articles={draftArticles}
            onDraftClick={handleDraftClick}
            onComposeClick={handleComposeClick}
            className="w-1/2 max-h-screen overflow-y-auto"
          />
          <SubmittedArticles
            articles={submittedArticles}
            onSubmittedClick={handleSubmittedClick}
            onComposeClick={handleComposeClick}
            className="w-1/2 max-h-screen overflow-y-scroll"
          />
        </div>
        {isComposeOpen && (
          <ComposeArticleModal
            onClose={() => setComposeOpen(false)}
            articleId={selectedArticle.id}
            initialTitle={selectedArticle.title}
            initialContent={selectedArticle.content}
            onSaveDraft={() => setComposeOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
