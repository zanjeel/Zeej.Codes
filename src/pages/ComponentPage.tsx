import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Eye, Copy, Check } from 'lucide-react';
import { components } from '../data/components';
import LazyCodeEditor from '../components/LazyCodeEditor';
import Preview from '../components/Preview';

const ComponentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const component = components.find((c) => c.id === id);
  const [html, setHtml] = React.useState(component?.html || '');
  const [css, setCss] = React.useState(component?.css || '');
  const [activeTab, setActiveTab] = React.useState<'html' | 'css'>('html');
  const [copied, setCopied] = useState(false);
  const [bgColor, setBgColor] = useState('#000000');
  // const [textColor, setTextColor] = useState('#000000');

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = () => {
    const code = activeTab === 'html' ? html : css;
    navigator.clipboard.writeText(code);
    setCopied(true);
  };

  if (!component) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">Component not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">{component.name}</h1>
        <p className="text-gray-400 mb-4">{component.description}</p>
        <div className="flex items-center space-x-2 text-gray-400">
          <Eye className="w-4 h-4" />
          <span>{component.views.toLocaleString()} views</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-medium text-white mb-2">Preview</h2>
              <div>
                {/* <label className="block text-sm text-gray-400 mb-1">Background</label> */}
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-8 h-8 rounded cursor-pointer"
                />
              </div>
          </div>
          <div className="py-11" style={{ background: bgColor }}>
            <Preview 
              html={html} 
              css={css + `
                .preview-container {
                   height:250px;
                }
              `} 
            />
          </div>
        </div>
        <div className="h-[500px] bg-gray-800 rounded-lg overflow-hidden">
          <div className="flex border-b border-gray-700">
            <button
              className={`flex-1 px-4 py-2 text-sm font-medium ${
                activeTab === 'html'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('html')}
            >
              HTML
            </button>
            <button
              className={`flex-1 px-4 py-2 text-sm font-medium ${
                activeTab === 'css'
                  ? 'bg-gray-700 text-white  u'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab('css')}
            >
              CSS
            </button>
            <button
              onClick={handleCopy}
              className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 flex items-center space-x-1"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <LazyCodeEditor
            html={html}
            css={css}
            activeTab={activeTab}
            onHtmlChange={setHtml}
            onCssChange={setCss}
          />
        </div>

        
      </div>
    </div>
  );
};

export default ComponentPage;