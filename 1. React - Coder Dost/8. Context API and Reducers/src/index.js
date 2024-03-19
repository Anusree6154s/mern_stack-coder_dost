import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import App from './App';
import CombinedProvider from './Context API/CombinedProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CombinedProvider>
      <App />
    </CombinedProvider>
  </React.StrictMode>
);
