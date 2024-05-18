// src/components/Sidebar.tsx
import React from 'react';

interface SidebarProps {
  onComposeClick: () => void;
  onNavClick: (section: 'drafts' | 'submitted') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onComposeClick, onNavClick }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4">
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4 transition duration-300"
          onClick={onComposeClick}
        >
          Compose
        </button>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 px-4">
          <li>
            <button
              onClick={() => onNavClick('submitted')}
              className="w-full text-left flex items-center p-2 text-base font-normal text-gray-300 hover:bg-gray-700 rounded-lg transition duration-300"
            >
              Submitted Articles
            </button>
          </li>
          <li>
            <button
              onClick={() => onNavClick('drafts')}
              className="w-full text-left flex items-center p-2 text-base font-normal text-gray-300 hover:bg-gray-700 rounded-lg transition duration-300"
            >
              Draft Articles
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
