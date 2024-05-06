import React, { useState } from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import NewsSection from './NewsSection';
import ReportersSection from './ReporterSection';
import OverallSection from './OverallSection';

export default function Dashboard() {
    const [activeSection, setActiveSection] = useState('News');

    const handleSectionClick = (section: string) => {
      setActiveSection(section);
    };
  return (
    <div className="flex h-screen">
      <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick} />
      <div className="flex-1 p-4">
        {activeSection === 'News' && <NewsSection />}
        {activeSection === 'Reporters' && <ReportersSection />}
        {activeSection === 'Overall' && <OverallSection />}
      </div>
    </div>
  )
}
