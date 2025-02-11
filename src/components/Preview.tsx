import React from 'react';

interface PreviewProps {
  html: string;
  css: string;
}

const Preview: React.FC<PreviewProps> = ({ html, css }) => {
  const combinedCode = `
    <style>${css}</style>
    ${html}
  `;

  return (
    <div className="w-full h-full rounded-lg shadow-lg p-8 flex items-center justify-center">
      <div
        className="preview-container"
        dangerouslySetInnerHTML={{ __html: combinedCode }}
      />
    </div>
  );
}

export default Preview;