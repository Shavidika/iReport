import React, { useState } from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import NewsSection from './SubmittedArticles';
import ReportersSection from './PublishedArticles';
import OverallSection from './DeclinedArticles';
import Header from '../../components/Header';
import ReporterRequest from './ReporterRequest';

export default function Dashboard() {
    const [activeSection, setActiveSection] = useState('Submitted');

    const handleSectionClick = (section: string) => {
      setActiveSection(section);
    };

    return (
        <div>
            <Header />  
            <line className="flex flex-col items-center justify-center h-0.5 bg-black"></line>
            <div className="flex h-screen bg-gray-100">
                <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick} />
                <div className="flex-1 p-4 ml-64 mt-20">
                    {activeSection === 'Submitted' && <NewsSection />}
                    {activeSection === 'Published' && <ReportersSection />}
                    {activeSection === 'Declined' && <OverallSection />}
                    {activeSection === 'Request' && <ReporterRequest />}
                </div>
            </div>
        </div>
    );
}
