export interface Component {
  id: string;
  name: string;
  description: string;
  html: string;
  css: string;
  category: string;
  views: number;
}

export type EditorTab = 'html' | 'css';

export type Category = {
  id: string;
  name: string;
  icon: string;
};