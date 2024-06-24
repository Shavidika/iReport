import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { submitArticle, deleteArticle, saveDraftArticle } from '../../slices/articleSlice';

interface ComposeArticleModalProps {
  onClose: () => void;
}

const ComposeArticleModal: React.FC<ComposeArticleModalProps> = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState('');
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.articles.articles);
  
  const latestArticleId = articles.length > 0 ? articles[articles.length - 1].id : '';

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!title || !content) {
      setError('Title and content cannot be empty.');
      return;
    }

    const response = await dispatch(submitArticle({ id: latestArticleId, title, content }));
    if (submitArticle.fulfilled.match(response)) {
      console.log(`Article submitted with id ${latestArticleId}`);
      onClose();
    } else {
      setError('Failed to submit the article. Please try again.');
    }
  };

  const handleSaveDraft = async () => {
    const response = await dispatch(saveDraftArticle({ id: latestArticleId, title, content }));
    if (saveDraftArticle.fulfilled.match(response)) {
      console.log(`Article saved as draft with id ${latestArticleId}`);
      onClose();
    } else {
      setError('Failed to save the article as draft. Please try again.');
    }
  };

  const handleCancel = async () => {
    const response = await dispatch(deleteArticle(latestArticleId));
    if (deleteArticle.fulfilled.match(response)) {
      console.log(`Article deleted with id ${latestArticleId}`);
      onClose();
    } else {
      setError('Failed to delete the article. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6">Compose Article</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={6}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleCancel}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg mr-2 transition duration-300"
          >
            Cancel
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
