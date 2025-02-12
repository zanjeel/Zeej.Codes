import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Code2 } from 'lucide-react';
import { components } from '../data/components';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Beautiful UI Components
        </h1>
        <p className="text-gray-400 text-lg">
          Discover stunning UI components for your next project. Completely Free to Use. No Copyrights Required.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {components.map((component) => (
          <div
            key={component.id}
            className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-400 transition-colors"
          >
            <div className="p-6 h-96 bg-gray-900">
              <div
                className="preview-container"
                dangerouslySetInnerHTML={{
                  __html: `<style>${component.css}</style>${component.html}`,
                }}
              />
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{component.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{component.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Eye className="w-4 h-4" />
                  <span>{component.views.toLocaleString()}</span>
                </div>
                
                <Link
                  to={`/component/${component.id}`}
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md transition-colors"
                >
                  <Code2 className="w-4 h-4" />
                  <span>Get Code</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;