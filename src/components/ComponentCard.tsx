import React from 'react';
import type { Component } from '../types';

interface ComponentCardProps {
  component: Component;
  onClick: () => void;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ component, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold mb-2">{component.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{component.description}</p>
      <div className="bg-gray-50 rounded p-4">
        <div dangerouslySetInnerHTML={{ 
          __html: `<style>${component.css}</style>${component.html}` 
        }} />
      </div>
    </div>
  );
}

export default ComponentCard;