import React, { useState } from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import NewsSection from './Submitted';
import ReportersSection from './ReporterSection';
import OverallSection from './OverallSection';
import Header from '../../components/Header';

export default function Dashboard() {
    const [activeSection, setActiveSection] = useState('News');

    const handleSectionClick = (section: string) => {
      setActiveSection(section);
    };
  return (
    <div>
      <Header />
      <line className="flex flex-col items-center justify-center h-0.5  bg-black"></line>
    <div className="flex h-screen">
      <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick} />
      <div className="flex-1 p-4">
        {activeSection === 'Submitted' && <NewsSection />}
        {activeSection === 'Published' && <ReportersSection />}
        {activeSection === 'Declined' && <OverallSection />}
      </div>
    </div>
    </div>
  )
}
