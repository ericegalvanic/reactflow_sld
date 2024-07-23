import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoot from './app/AppRoot.tsx';
import '@xyflow/react/dist/style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoot />
  </React.StrictMode>
);
