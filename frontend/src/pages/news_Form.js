import React from 'react';

const NewsForm = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Create a News Post</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border rounded-md py-2 px-3 mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="newsHeading" className="block text-sm font-semibold text-gray-600">
            News Heading:
          </label>
          <input
            type="text"
            id="newsHeading"
            name="newsHeading"
            className="w-full border rounded-md py-2 px-3 mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-semibold text-gray-600">
            Time:
          </label>
          <input
            type="text"
            id="time"
            name="time"
            className="w-full border rounded-md py-2 px-3 mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-semibold text-gray-600">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="w-full border rounded-md py-2 px-3 mt-1"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="newsCategory" className="block text-sm font-semibold text-gray-600">
            News Category:
          </label>
          <input
            type="text"
            id="newsCategory"
            name="newsCategory"
            className="w-full border rounded-md py-2 px-3 mt-1"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="imagesOrVideos" className="block text-sm font-semibold text-gray-600">
            Images or Videos:
          </label>
          <input
            type="text"
            id="imagesOrVideos"
            name="imagesOrVideos"
            className="w-full border rounded-md py-2 px-3 mt-1"
          />
        </div>

        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default NewsForm;
