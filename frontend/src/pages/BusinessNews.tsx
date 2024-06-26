import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Define the article data
const articles = [
  {
    id: 1,
    title: 'New Business Strategy Unveiled',
    content: `
      In a bold move aimed at redefining its impact on global youth development and leadership, AIESEC has unveiled its latest business strategy. The strategy, developed through extensive research and collaboration with key stakeholders, outlines a visionary roadmap to address contemporary challenges and opportunities in the youth leadership space. Enhanced Global Reach: Expansion into new regions and communities to empower more young leaders worldwide. Stay tuned as AIESEC embarks on this transformative journey to shape a brighter future for youth leadership worldwide.
    `,
    author: 'Sathsara Soysa',
    date: 'June 25, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'new-business-strategy',
    category: 'business',
  },
  {
    id: 2,
    title: 'Global Market Trends for 2024',
    content: `
      The year 2024 promises to be pivotal for global markets, marked by dynamic shifts and emerging trends that will redefine industries across the globe. One of the foremost trends anticipated is the accelerating pace of digital transformation. Companies worldwide are increasingly prioritizing environmental, social, and governance (ESG) factors, not just as a corporate responsibility but as a core driver of long-term value creation. This shift reflects a growing recognition of the interconnectedness between business success and sustainable practices and youth leadership worldwide.
    `,
    author: 'Nimsara Pamoda',
    date: 'June 26, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'global-market-trends',
    category: 'business',
  },
  {
    id: 3,
    title: 'Impact of Digital Transformation on Businesses',
    content: `
      Sed euismod ligula eget finibus suscipit. Vivamus elementum varius odio, nec lobortis ipsum scelerisque ut. Aenean vel mauris id ipsum vehicula faucibus.
    `,
    author: 'Alex Johnson',
    date: 'June 27, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'digital-transformation-impact',
    category: 'business',
  },
  {
    id: 4,
    title: 'Emerging Technologies in Business',
    content: `
      As we move further into the 21st century, businesses are increasingly harnessing the power of emerging technologies to drive innovation and efficiency. From artificial intelligence and machine learning to blockchain and the Internet of Things (IoT), these technologies are reshaping industries across the globe. Businesses that embrace these advancements not only enhance their operational capabilities but also gain a competitive edge in a rapidly evolving market landscape.
    `,
    author: 'John Smith',
    date: 'June 28, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'emerging-technologies',
    category: 'business',
  },
  {
    id: 5,
    title: 'Challenges in Supply Chain Management',
    content: `
      The global supply chain has faced unprecedented challenges in recent years, exacerbated by disruptions such as the COVID-19 pandemic and geopolitical tensions. Businesses are now reevaluating their supply chain strategies to enhance resilience and agility. Key focus areas include digitization, risk management, and sustainability practices to mitigate future disruptions and ensure smooth operations in a volatile global market.
    `,
    author: 'Emily Brown',
    date: 'June 29, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'supply-chain-challenges',
    category: 'business',
  },
  {
    id: 6,
    title: 'The Future of Remote Work',
    content: `
      Remote work has become a defining trend in the modern workplace, driven by advancements in technology and shifting attitudes towards work-life balance. Companies are adopting hybrid work models that blend office-based and remote work environments to accommodate diverse employee preferences. This evolution is reshaping organizational structures and employee engagement strategies, paving the way for a more flexible and inclusive work culture.
    `,
    author: 'Sarah Miller',
    date: 'June 30, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'future-of-remote-work',
    category: 'business',
  },
  {
    id: 7,
    title: 'The Rise of E-commerce Platforms',
    content: `
      E-commerce platforms continue to experience rapid growth, fueled by changing consumer behaviors and technological advancements. Businesses are increasingly leveraging these platforms to reach global markets and streamline their sales processes. The integration of AI-driven analytics and personalized shopping experiences further enhances customer engagement and loyalty, driving the evolution of digital commerce in the global marketplace.
    `,
    author: 'Michael Johnson',
    date: 'July 1, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'rise-of-ecommerce',
    category: 'business',
  },
  {
    id: 8,
    title: 'Innovations in Renewable Energy',
    content: `
      The global push towards sustainability is driving innovations in renewable energy. From solar and wind power to advancements in battery technology, businesses and governments alike are investing in clean energy solutions to mitigate climate change and reduce reliance on fossil fuels. These innovations not only promise environmental benefits but also present lucrative opportunities for economic growth and energy independence.
    `,
    author: 'Emma Watson',
    date: 'July 2, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'innovations-renewable-energy',
    category: 'business',
  },
  {
    id: 9,
    title: 'AI in Healthcare: Transforming Patient Care',
    content: `
      Artificial Intelligence (AI) is revolutionizing healthcare by enhancing diagnostic accuracy, predicting patient outcomes, and optimizing treatment plans. From medical imaging to personalized medicine, AI-powered technologies are reshaping the future of healthcare delivery, improving efficiency, and patient outcomes.
    `,
    author: 'Jessica Lee',
    date: 'July 3, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'ai-in-healthcare',
    category: 'healthcare',
  },
  {
    id: 10,
    title: 'Cryptocurrency Trends: What to Expect in 2024',
    content: `
      Cryptocurrencies continue to gain mainstream adoption, with trends indicating significant growth and regulatory developments in 2024. From decentralized finance (DeFi) to institutional investments, explore the latest developments shaping the future of digital currencies and blockchain technology.
    `,
    author: 'Andrew Green',
    date: 'July 4, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'cryptocurrency-trends',
    category: 'finance',
  },
  {
    id: 11,
    title: 'Future of Work: Automation and Job Market Trends',
    content: `
      Automation is transforming the job market, reshaping industries, and creating new opportunities. As businesses adopt robotics and AI technologies, understanding the impact on employment dynamics and workforce trends becomes crucial for career planning and organizational strategy.
    `,
    author: 'David White',
    date: 'July 5, 2024',
    image: 'https://via.placeholder.com/400x250', // Example image URL
    slug: 'future-of-work-automation',
    category: 'business',
  },
];

const BusinessNews: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  // Calculate last updated date
  const lastUpdated = articles.reduce((prev, current) => {
    const currentDateTime = new Date(current.date);
    return prev < currentDateTime ? currentDateTime : prev;
  }, new Date(articles[0].date));

  // Format last updated date
  const formattedLastUpdated = `${lastUpdated.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}`;

  const handleReadMore = (id: number) => {
    setSelectedArticle(id);
  };

  const handleReadLess = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 px-6 mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Business News</h1>
            <p className="text-lg mt-2">Explore the latest updates and trends in the world of business.</p>
          </div>
          <Link to="/" className="text-white hover:underline">
            Back to Home
          </Link>
        </div>
        <p className="text-sm mt-2">Last Updated: {formattedLastUpdated}</p>
      </div>

      {/* YouTube Video Section */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-2">The Impact of Global Trends</h2>
            <p className="text-gray-600 mb-4">
              The world is changing rapidly with emerging trends shaping global markets and industries. Explore how these trends are influencing business strategies worldwide.
            </p>
            <div className="flex justify-between items-center mt-2">
              <Link
                to={`/business/main-news`}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
              >
                Go to the Article
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trending News Section */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Trending News</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {articles.slice(0, 6).map((trendingArticle) => (
              <div key={trendingArticle.id} className="flex items-center">
                <img
                  src={trendingArticle.image}
                  alt={trendingArticle.title}
                  className="h-20 w-20 object-cover rounded-lg mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{trendingArticle.title}</h3>
                  <span className="inline-block bg-yellow-500 text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide mt-1">
                    Trending
                  </span>
                </div>
                <Link
                  to={`/${trendingArticle.category}/${trendingArticle.slug}`}
                  className="text-blue-500 hover:underline focus:outline-none ml-auto"
                >
                  View More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {articles.slice(6).map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={article.image} alt={article.title} className="h-40 w-full object-cover" />
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">
                {selectedArticle === article.id ? article.content : article.content.substring(0, 200)}...
              </p>
            </div>
            <div className="bg-gray-100 px-6 py-3">
              <p className="text-gray-500 text-sm">By {article.author}</p>
              <p className="text-gray-500 text-sm">{article.date}</p>
              <div className="flex justify-between items-center mt-2">
                {selectedArticle === article.id ? (
                  <button
                    onClick={handleReadLess}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
                  >
                    Read less
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => handleReadMore(article.id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
                    >
                      Read more
                    </button>
                    <Link
                      to={`/${article.category}/${article.slug}`}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded focus:outline-none"
                    >
                      Go to the Article
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessNews;
