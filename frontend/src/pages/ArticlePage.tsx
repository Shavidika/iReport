// src/pages/ArticlePage.tsx

import React from 'react';
import { useParams } from 'react-router-dom';

// Define the article data for all categories
const articles = {
  business: [
    {
      id: 1,
      title: 'New Business Strategy Unveiled',
      content: `
      In a bold move aimed at redefining its impact on global youth development and leadership, AIESEC has unveiled its latest business strategy. The strategy, developed through extensive research and collaboration with key stakeholders, outlines a visionary roadmap to address contemporary challenges and opportunities in the youth leadership space.
      Enhanced Global Reach: Expansion into new regions and communities to empower more young leaders worldwide.
      Stay tuned as AIESEC embarks on this transformative journey to shape a brighter future for youth leadership worldwide.
    `,author: 'Sathsara Soysa',
      date: 'June 25, 2024',
      image: 'https://via.placeholder.com/400x250', // Example image URL
      slug: 'new-business-strategy',
      category: 'business',
    },
    {
      id: 2,
      title: 'Global Market Trends for 2024',
      content: `
    As we step into 2024, the global economic landscape is set to witness transformative changes, influenced by technological advancements, geopolitical shifts, and evolving consumer behaviors. Here are some of the key trends shaping the market this year:

    - **Sustainability Integration**: Companies are increasingly embedding environmental, social, and governance (ESG) considerations into their core strategies. This trend is driven by a growing awareness of the long-term value of sustainable practices and includes:
      - Expansion of green technologies and renewable energy solutions.
      - Increased focus on reducing carbon footprints and enhancing resource efficiency.
      - Enhanced transparency and reporting on sustainability metrics.

    - **Technological Innovations**: The pace of technological advancements continues to accelerate, with significant impacts on various sectors. Key technological trends include:
      - **Artificial Intelligence (AI) and Automation**: Enhancing efficiency and innovation across industries, from manufacturing to healthcare.
      - **Blockchain and Decentralized Finance (DeFi)**: Revolutionizing transparency, security, and efficiency in financial transactions.
      - **5G and IoT**: Enabling smarter, more connected devices and systems, driving advancements in smart cities, healthcare, and manufacturing.

    - **Geopolitical Dynamics**: Geopolitical factors are reshaping trade relationships, investment flows, and regulatory landscapes. Notable trends include:
      - Increased regionalism and trade realignments, affecting global supply chains.
      - Heightened focus on cybersecurity and data protection, driven by geopolitical tensions and regulatory pressures.

    - **Consumer Behavior Shifts**: The evolving preferences of consumers are driving changes in market strategies. Key shifts include:
      - A growing demand for personalized and sustainable products and services.
      - Increased adoption of digital and e-commerce platforms, accelerating the shift towards online shopping and digital interactions.
      - Rising importance of health and wellness, with consumers prioritizing products and services that support their well-being.

    These trends highlight the dynamic nature of the global market in 2024, presenting both challenges and opportunities for businesses worldwide. Companies that can effectively navigate these trends and leverage emerging technologies and sustainability practices are likely to lead the way in shaping a resilient and innovative future.

    Stay tuned as we continue to explore these trends and their implications for businesses and consumers globally.
  `,author: 'Nimsara Pamoda',
      date: 'June 26, 2024',
      image: 'https://via.placeholder.com/400x250', // Example image URL
      slug: 'global-market-trends',
      category: 'business',
    },
    {
      id: 3,
      title: 'Impact of Digital Transformation on Businesses',
      content:
        'Sed euismod ligula eget finibus suscipit. Vivamus elementum varius odio, nec lobortis ipsum scelerisque ut. Aenean vel mauris id ipsum vehicula faucibus.',
      author: 'Alex Johnson',
      date: 'June 27, 2024',
      image: 'https://via.placeholder.com/400x250', // Example image URL
      slug: 'digital-transformation-impact',
      category: 'business',
    },
  ],
  social: [
    {
      id: 1,
      title: 'Impact of Social Media on Modern Society',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum erat vitae tellus fringilla, a dapibus mi luctus. Nulla facilisi.',
      author: 'Emily Brown',
      date: 'June 28, 2024',
      image: 'https://via.placeholder.com/400x250', // Example image URL
      slug: 'impact-of-social-media',
      category: 'social',
    },
    {
      id: 2,
      title: 'The Rise of Influencer Marketing',
      content:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst.',
      author: 'Michael Johnson',
      date: 'June 29, 2024',
      image: 'https://via.placeholder.com/400x250', // Example image URL
      slug: 'influencer-marketing-rise',
      category: 'social',
    },
    {
      id: 3,
      title: 'Ethical Issues in Social Media Usage',
      content:
        'Sed euismod ligula eget finibus suscipit. Vivamus elementum varius odio, nec lobortis ipsum scelerisque ut. Aenean vel mauris id ipsum vehicula faucibus.',
      author: 'Sophia Williams',
      date: 'June 30, 2024',
      image: 'https://via.placeholder.com/400x250', // Example image URL
      slug: 'ethical-issues-social-media',
      category: 'social',
    },
  ],
  security: [
    {
      id: 1,
      title: 'Enhanced Security Measures Implemented',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum erat vitae tellus fringilla, a dapibus mi luctus. Nulla facilisi.',
      author: 'Daniel Moore',
      date: 'July 1, 2024',
      image: 'https://via.placeholder.com/400x250', // Example image URL
      slug: 'enhanced-security-measures',
      category: 'security',
    },
    {
      id: 2,
      title: 'Cybersecurity Trends for 2024',
      content:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst.',
      author: 'Olivia Davis',
      date: 'July 2, 2024',
      image: 'https://via.placeholder.com/400x250', // Example image URL
      slug: 'cybersecurity-trends',
      category: 'security',
    },
    {
      id: 3,
      title: 'Importance of Data Privacy in Modern Age',
      content:
        'Sed euismod ligula eget finibus suscipit. Vivamus elementum varius odio, nec lobortis ipsum scelerisque ut. Aenean vel mauris id ipsum vehicula faucibus.',
      author: 'William Taylor',
      date: 'July 3, 2024',
      image: 'https://via.placeholder.com/400x250', // Example image URL
      slug: 'data-privacy-importance',
      category: 'security',
    },
  ],
  sport: [
    {
      id: 1,
      title: 'Top Sporting Events of the Year',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum erat vitae tellus fringilla, a dapibus mi luctus. Nulla facilisi.',
      author: 'Sophie Clark',
      date: 'July 4, 2024',
      image: 'https://via.placeholder.com/400x250', // Example image URL
      slug: 'top-sporting-events',
      category: 'sport',
    },
    {
      id: 2,
      title: 'Athlete Spotlight: Rising Stars',
      content:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst.',
      author: 'James Anderson',
      date: 'July 5, 2024',
      image: 'https://via.placeholder.com/400x250', // Example image URL
      slug: 'athlete-spotlight',
      category: 'sport',
    },
    {
      id: 3,
      title: 'Fitness and Wellness Tips for Athletes',
      content:
        'Sed euismod ligula eget finibus suscipit. Vivamus elementum varius odio, nec lobortis ipsum scelerisque ut. Aenean vel mauris id ipsum vehicula faucibus.',
      author: 'Emma White',
      date: 'July 6, 2024',
      image: 'https://via.placeholder.com/400x250', // Example image URL
      slug: 'fitness-wellness-tips',
      category: 'sport',
    },
  ],
};

const ArticlePage: React.FC = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();

  // Find the article based on category and slug
  let article = null;
  if (category && slug) {
    const articlesForCategory = articles[category as keyof typeof articles];
    article = articlesForCategory.find((a) => a.slug === slug);
  }

  if (!article) {
    return <div>Loading...</div>; // Handle case where article is not found
  }

  return (
    <div className="container mx-auto p-6">
      <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img src={article.image} alt={article.title} className="h-64 w-full object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          <p className="text-gray-600 mb-4">{article.content}</p>
        </div>
        <div className="bg-gray-100 px-6 py-3">
          <p className="text-gray-500 text-sm">By {article.author}</p>
          <p className="text-gray-500 text-sm">{article.date}</p>
        </div>
      </article>
    </div>
  );
};

export default ArticlePage;

