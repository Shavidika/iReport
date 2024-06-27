import React from "react";

const News: React.FC = () => {
  // Sample news data
  const headlineNews = [
    {
      id: 1,
      title: "Bolivian police arrest leader of coup attempt",
      image: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/8e6e/live/d8cc7a70-341d-11ef-acf3-df0720a514a4.jpg.webp",
      description: "Troops pulled away from government buildings hours after the presidential palace was stormed.",
      time: "27 mins ago",
      category: "Latin America",
    }
  ];

  const subNews = [
    {
      id: 2,
      title: "Biden v Trump: What are they thinking in Moscow, Beijing and Delhi?",
      image: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/f0bf/live/c4405b10-33d4-11ef-a044-9d4367d5b599.jpg.webp",
      time: "3 hrs ago",
      category: "US & Canada",
    },
    {
      id: 3,
      title: "More than 500 die in six days as Pakistan swelters",
      image: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/7a6c/live/17c14c40-341b-11ef-9462-79d177e25adb.jpg.webp",
      time: "6 hrs ago",
      category: "World",
    },
    {
      id: 4,
      title: "Australia turned its back on Assange. Time made him a martyr",
      image: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/6b7b/live/6c9e22d0-3383-11ef-8790-af9f57ffb8c3.jpg.webp",
      time: "9 hrs ago",
      category: "World",
    },
    {
      id: 5,
      title: "LIVE Afghanistan slump to 23-5 against brilliant SA in semi-final",
      image: "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/afd7/live/39745da0-3420-11ef-bdc5-41d7421c2adf.jpg",
      time: "12 hrs ago",
      category: "World",
    },
    {
      id: 6,
      title: "Could the World Cup signal goodbye for India's batting legends?",
      image: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/5dab/live/dda80570-31e6-11ef-903f-61734aec5b6f.jpg.webp",
      time: "15 hrs ago",
      category: "World",
    },
    {
      id: 7,
      title: "Sleepy Saipan witnesses end of Julian Assange legal saga",
      image: "https://via.placeholder.com/600x400",
      time: "12 hrs ago",
      category: "World",
    },
    {
      id: 8,
      title: "Pardoned former officer says military gay sex conviction 'hangs over me'",
      image: "https://via.placeholder.com/600x400",
      time: "18 hrs ago",
      category: "World",
    }
  ];

  const trendingNews = [
    {
      id: 9,
      title: "New Breakthrough in Medical Research",
      image: "https://medlineplus.gov/images/UnderstandingMedicalResearch_share.jpg",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      time: "1 hr ago",
      category: "Health",
    },
    {
      id: 10,
      title: "Economic Update: Global Markets React to New Policies",
      image: "https://economictimes.indiatimes.com/thumb/msid-89395141,width-1600,height-900,resizemode-4/markets/stocks/news/global-market-cues-for-february-07-2022.jpg",
      time: "2 hrs ago",
      category: "Economy",
    },
    {
      id: 11,
      title: "New Discoveries in Space Exploration",
      image: "https://frostbrowntodd.com/app/uploads/2023/02/my-design-space-station-on-earth-orbit-the-satellite-has-severalcommunication-antenalso-it-maybe-spy-gps-satelite-stockpack-gettyimages-scaled.jpg",
      time: "3 hrs ago",
      category: "Science",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Headline News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Headline News */}
            {headlineNews.map((news) => (
              <div key={news.id} className="col-span-2 bg-black text-white p-4 rounded-lg">
                <img src={news.image} alt={news.title} className="rounded-lg mb-4" />
                <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                <p className="text-gray-200">{news.description}</p>
                <div className="text-sm text-gray-300 mt-2">
                  <span>{news.time}</span> | <span>{news.category}</span>
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-6">
              {subNews.slice(0, 2).map((news) => (
                <div key={news.id} className="bg-gray-100 p-4 rounded-lg">
                  <img src={news.image} alt={news.title} className="rounded-lg mb-4" />
                  <h3 className="text-base font-semibold mb-2">{news.title}</h3>
                  <div className="text-sm text-gray-500 mt-2">
                    <span>{news.time}</span> | <span>{news.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">🔥 Trending News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Trending News */}
            {trendingNews.slice(0, 1).map((news) => (
              <div key={news.id} className="col-span-2 bg-black p-4 rounded-lg">
                <img src={news.image} alt={news.title} className="rounded-lg mb-4" />
                <h3 className="text-white font-semibold mb-2">{news.title}</h3>
                <p className="text-gray-200">{news.description}</p>
                <div className="text-sm text-gray-300 mt-2">
                  <span>{news.time}</span> | <span>{news.category}</span>
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-6">
              {trendingNews.slice(1, 3).map((news) => (
                <div key={news.id} className="bg-gray-100 p-4 rounded-lg">
                  <img src={news.image} alt={news.title} className="rounded-lg mb-4" />
                  <h3 className="text-base font-semibold mb-2">{news.title}</h3>
                  <div className="text-sm text-gray-500 mt-2">
                    <span>{news.time}</span> | <span>{news.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;
