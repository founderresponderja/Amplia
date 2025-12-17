
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContentProvider } from './contexts/ContentContext';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ContentProvider>
        <App />
      </ContentProvider>
    </React.StrictMode>
  );
}
