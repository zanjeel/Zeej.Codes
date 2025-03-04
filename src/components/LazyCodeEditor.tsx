import React, { Suspense } from 'react';
import type { EditorTab } from '../types';

// Lazy load the CodeEditor component
const CodeEditor = React.lazy(() => import('./CodeEditor'));

interface CodeEditorProps {
  html: string;
  css: string;
  activeTab: EditorTab;
  onHtmlChange: (value: string) => void;
  onCssChange: (value: string) => void;
}

// Loading placeholder component
const LoadingEditor: React.FC = () => (
  <div className="h-full w-full flex items-center justify-center bg-gray-800 text-gray-400">
    Loading editor...
  </div>
);

const LazyCodeEditor: React.FC<CodeEditorProps> = (props) => {
  return (
    <Suspense fallback={<LoadingEditor />}>
      <CodeEditor {...props} />
    </Suspense>
  );
};

export default LazyCodeEditor; 