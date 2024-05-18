// NewsSection.tsx
import React from "react";
import NewsCard from "../../components/News/newsList";

const Submitted = () => {
  return (
    <div style={{ overflowY: "auto", maxHeight: "100vh" }}>
      <NewsCard />
    </div>
  );
};

export default Submitted;
