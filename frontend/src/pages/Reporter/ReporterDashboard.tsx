import React, { useState } from 'react';
import DraftArticles from './DraftArticles';
import SubmittedArticles from './SubmittedArticles';
import Sidebar from '../../components/Reporter/Sidebar';
import ComposeArticleModal from '../../components/Reporter/ComposeArticle';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { createEmptyDraft } from '../../slices/articleSlice';

const Dashboard: React.FC = () => {
  const [isComposeOpen, setComposeOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<'drafts' | 'submitted'>('drafts');
  const [selectedArticle, setSelectedArticle] = useState<{ id: string, title: string, content: string }>({ id: '', title: '', content: '' });
  const dispatch = useAppDispatch();
  const articles = useAppSelector((state) => state.articles.articles);

  const handleComposeClick = async () => {
    const response = await dispatch(createEmptyDraft());
    if (createEmptyDraft.fulfilled.match(response)) {
      const id = response.payload.id;
      console.log(`New draft created with id ${id}`);
      setSelectedArticle({ id, title: '', content: '' });
    }
    setComposeOpen(true);
  };

  const handleDraftClick = (article: { id: string, title: string, content: string }) => {
    setSelectedArticle(article);
    setComposeOpen(true);
  };

  const handleSubmittedClick = (article: { id: string, title: string, content: string }) => {
    setSelectedArticle(article);
    setComposeOpen(true);
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onComposeClick={handleComposeClick} onNavClick={setSelectedSection} />
      <main className="flex-1 p-6 overflow-auto">
        {selectedSection === 'drafts' && <DraftArticles onDraftClick={handleDraftClick} />}
        {selectedSection === 'submitted' && <SubmittedArticles onSubmittedClick={handleSubmittedClick} />}
      </main>
      {isComposeOpen && 
        <ComposeArticleModal 
          onClose={() => setComposeOpen(false)} 
          articleId={selectedArticle.id} 
          initialTitle={selectedArticle.title} 
          initialContent={selectedArticle.content} 
          onSaveDraft={() => setComposeOpen(false)} 
        />
      }
    </div>
  );
};

export default Dashboard;
