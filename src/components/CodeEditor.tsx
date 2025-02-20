import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html as htmlLang } from '@codemirror/lang-html';
import { css as cssLang } from '@codemirror/lang-css';
import { oneDark } from '@codemirror/theme-one-dark';
import type { EditorTab } from '../types';

interface CodeEditorProps {
  html: string;
  css: string;
  activeTab: EditorTab;
  onHtmlChange: (value: string) => void;
  onCssChange: (value: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  html,
  css,
  activeTab,
  onHtmlChange,
  onCssChange,
}) => {
  return (
    <div className="h-full">
      <CodeMirror
        value={activeTab === 'html' ? html : css}
        height="100%"
        theme={oneDark}
        extensions={[activeTab === 'html' ? htmlLang() : cssLang()]}
        onChange={(value) => {
          if (activeTab === 'html') {
            onHtmlChange(value);
          } else {
            onCssChange(value);
          }
        }}
        className="h-full text-sm"
      />
    </div>
  );
};

export default CodeEditor;