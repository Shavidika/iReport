// OverallSection.tsx
import React from 'react';
import KanbanChart from '../../components/Admin/NewsKanban';

const OverallSection = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Overall</h2>
      <KanbanChart/>
    </div>
  );
};

export default OverallSection;