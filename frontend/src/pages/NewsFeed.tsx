import React from "react";
import Header from "../components/Header";
import NewsCard from "../components/News/newsList";

export default function NewsFeed() {
  return (
    <div>
      <Header />
      {/* <div className="flex flex-col items-center justify-center h-5 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">News Feed</h1>
        <p className="text-lg mb-6">Your trusted source for reliable news</p>
      </div> */}
      <NewsCard />
    </div>
  );
}
