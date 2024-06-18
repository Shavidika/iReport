import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

const NewsSubmissionPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [keyword, setKeyword] = useState("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Assuming only one file is allowed to be uploaded
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle submission logic here
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("File:", file);
    console.log("Keyword:", keyword);
    // Clear form fields after submission
    setTitle("");
    setContent("");
    setFile(null);
    setKeyword("");
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img className="w-auto h-11 " src="https://i.ibb.co/s56nq9W/i-Report-logo.png" alt="logo" />
        </a>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Submit Your News Article</h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                <input
                  type="text"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900">Content</label>
                <textarea
                  id="content"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900">Upload Photo/Video</label>
                <input
                  type="file"
                  id="file"
                  className="text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  onChange={handleFileChange}
                  accept="image/*,video/*"
                />
              </div>
              <div>
                <label htmlFor="keyword" className="block mb-2 text-sm font-medium text-gray-900">Keyword</label>
                <input
                  type="text"
                  id="keyword"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter keyword"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-black bg-primary-600 bg-slate-100 hover:bg-slate-300 focus:ring-4 focus:outline-1 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Submit
              </button>
              <p className="text-sm font-light text-gray-500">
                <Link to="/" className="font-medium text-primary-600 hover:underline">Back to Home</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSubmissionPage;
