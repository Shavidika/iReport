// Sidebar.tsx
import React from 'react';

interface SidebarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionClick }: SidebarProps) => {
  return (
    <div className="w-64 bg-gray-100 p-4 h-screen">
      <h2 className="text-lg font-bold mb-4">Admin Dashboard</h2>
      <ul>
        <li
          className={`py-2 px-4 cursor-pointer ${
            activeSection === 'News'? 'bg-gray-200' : ''
          }`}
          onClick={() => onSectionClick('News')}
        >
          News
        </li>
        <li
          className={`py-2 px-4 cursor-pointer ${
            activeSection === 'Reporters'? 'bg-gray-200' : ''
          }`}
          onClick={() => onSectionClick('Reporters')}
        >
          Reporters
        </li>
        <li
          className={`py-2 px-4 cursor-pointer ${
            activeSection === 'Overall'? 'bg-gray-200' : ''
          }`}
          onClick={() => onSectionClick('Overall')}
        >
          Overall
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;