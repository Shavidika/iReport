import React from 'react';
import { MdOutlineArticle, MdOutlinePublishedWithChanges, MdOutlineCancel, MdPersonAdd } from 'react-icons/md';

interface SidebarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionClick }: SidebarProps) => {
  return (
    <div className="fixed top-20 left-0 w-64 bg-gray-800 text-white p-4 h-full">
      <h2 className="text-lg font-bold mb-4">News Management</h2>
      <ul>
        <li
          className={`py-2 px-4 cursor-pointer flex items-center ${
            activeSection === 'Submitted' ? 'bg-gray-700' : ''
          }`}
          onClick={() => onSectionClick('Submitted')}
        >
          <MdOutlineArticle className="mr-2" />
          Submitted
        </li>
        <li
          className={`py-2 px-4 cursor-pointer flex items-center ${
            activeSection === 'Published' ? 'bg-gray-700' : ''
          }`}
          onClick={() => onSectionClick('Published')}
        >
          <MdOutlinePublishedWithChanges className="mr-2" />
          Published
        </li>
        <li
          className={`py-2 px-4 cursor-pointer flex items-center ${
            activeSection === 'Declined' ? 'bg-gray-700' : ''
          }`}
          onClick={() => onSectionClick('Declined')}
        >
          <MdOutlineCancel className="mr-2" />
          Declined
        </li>
      </ul>

      <h2 className="text-lg font-bold mt-8 mb-4">User Management</h2>
      <ul>
        <li
          className={`py-2 px-4 cursor-pointer flex items-center ${
            activeSection === 'ReporterRequest' ? 'bg-gray-700' : ''
          }`}
          onClick={() => onSectionClick('ReporterRequest')}
        >
          <MdPersonAdd className="mr-2" />
          Reporter Request
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
