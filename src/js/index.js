import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.body);

root.render(
  <React.StrictMode>
    <Helmet>
      <title>Andrea Sestito</title>
    </Helmet>
    <App />
  </React.StrictMode>
);
