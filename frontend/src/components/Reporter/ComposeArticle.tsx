import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import {
  submitArticle,
  deleteArticle,
  saveDraftArticle,
} from "../../slices/articleSlice";
import axios from "axios";

interface ComposeArticleModalProps {
  onClose: () => void;
  articleId: string;
  initialTitle: string;
  initialContent: string;
  initialImage?: string;
  onSaveDraft: () => void;
}

const ComposeArticleModal: React.FC<ComposeArticleModalProps> = ({
  onClose,
  articleId,
  initialTitle,
  initialContent,
  initialImage,
  onSaveDraft,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [articleImage, setArticleImage] = useState<string | undefined>(
    initialImage
  );
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const dispatch = useAppDispatch();
  const [suggestedTitleText, setSuggestedTitleText] = useState("");
  const [suggestedContentText, setSuggestedContentText] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setTitle(text);

    const inputEvent = e.nativeEvent as InputEvent;

    // Check if the last character is a space or enter
    if (text.endsWith(" ") || inputEvent.inputType === "insertParagraph") {
      handleTyping(text, setSuggestedTitleText);
    } else {
      setSuggestedTitleText("");
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setContent(text);

    const inputEvent = e.nativeEvent as InputEvent;

    // Check if the last character is a space or enter
    if (text.endsWith(" ") || inputEvent.inputType === "insertParagraph") {
      handleTyping(text, setSuggestedContentText);
    } else {
      setSuggestedContentText("");
    }
  };

  const handleTyping = async (text: string, setSuggestedText: React.Dispatch<React.SetStateAction<string>>) => {
    if (text.trim().length === 0) {
      setSuggestedText("");
      return;
    }
    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        input_text: text,
      });
      setSuggestedText(response.data.generated_text.substring(text.length));
    } catch (error) {
      console.error("Error generating text", error);
    }
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && suggestedTitleText) {
      e.preventDefault();
      setTitle((prevTitle) => `${prevTitle.trim()} ${suggestedTitleText.trim()}`);
      setSuggestedTitleText("");
    }
  };

  const handleContentKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && suggestedContentText) {
      e.preventDefault();
      setContent((prevContent) => `${prevContent.trim()} ${suggestedContentText.trim()}`);
      setSuggestedContentText("");
    }
  };

  useEffect(() => {
    setTitle(initialTitle);
    setContent(initialContent);
    setArticleImage(initialImage);
  }, [initialTitle, initialContent, initialImage]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      setArticleImage(URL.createObjectURL(e.target.files[0]));
      await uploadImage(e.target.files[0]);
    }
  };

  const uploadImage = async (image: File) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "jafd0bw0");

    try {
      setUploading(true);
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dymxhjpec/image/upload",
        formData,
        {
          onUploadProgress: (progressEvent) => {
            if (typeof progressEvent.total === "number") {
              const percentCompleted = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              setUploadProgress(percentCompleted);
            } else {
              console.log("Upload size is unknown");
            }
          },
        }
      );
      setArticleImage(response.data.secure_url);
      setUploading(false);
    } catch (error) {
      setError("Failed to upload image. Please try again.");
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    if (!title || !content) {
      setError("Title and content cannot be empty.");
      return;
    }

    const response = await dispatch(
      submitArticle({
        id: articleId,
        title,
        content,
        articleImage: articleImage ?? "",
      })
    );
    if (submitArticle.fulfilled.match(response)) {
      console.log(`Article submitted with id ${articleId}`);
      onClose();
    } else {
      setError("Failed to submit the article. Please try again.");
    }
  };

  const handleSaveDraft = async () => {
    const response = await dispatch(
      saveDraftArticle({
        id: articleId,
        title,
        content,
        articleImage: articleImage ?? "",
      })
    );
    if (saveDraftArticle.fulfilled.match(response)) {
      console.log(`Article saved as draft with id ${articleId}`);
      onSaveDraft();
      onClose();
    } else {
      setError("Failed to save the article as draft. Please try again.");
    }
  };

  const handleCancel = async () => {
    const response = await dispatch(deleteArticle(articleId));
    if (deleteArticle.fulfilled.match(response)) {
      console.log(`Article deleted with id ${articleId}`);
      onClose();
    } else {
      setError("Failed to delete the article. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6">Compose Article</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <div className="relative">
            <textarea
              value={title}
              rows={2}
              onChange={handleTitleChange}
              onKeyDown={handleTitleKeyDown}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute top-0 left-0 w-full h-full flex px-4 py-2 pointer-events-none">
              <span className="text-gray-500 opacity-50">
                {title}
                <span className="text-gray-500 opacity-50">
                  {suggestedTitleText}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Content</label>
          <div className="relative">
            <textarea
              value={content}
              onChange={handleContentChange}
              onKeyDown={handleContentKeyDown}
              className="w-full px-4 py-2 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={6}
            />
            <div className="absolute top-0 left-0 w-full h-full flex py-2 pl-4 px-4 pointer-events-none">
              <span className="text-gray-500 opacity-50">
                {content}
                <span className="text-gray-500 opacity-50">
                  {suggestedContentText}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Image</label>
          {articleImage && (
            <div className="mb-4">
              <img
                src={articleImage}
                alt="Article"
                className="max-w-xs h-auto mb-2"
              />
            </div>
          )}
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {uploading && (
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleCancel}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mr-2 transition duration-300"
          >
            Delete
          </button>
          <button
            onClick={handleSaveDraft}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg mr-2 transition duration-300"
          >
            Save as Draft
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComposeArticleModal;
