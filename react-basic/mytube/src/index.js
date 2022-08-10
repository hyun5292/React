import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import Youtube from './service/youtube';

const youtube = new Youtube();

const root = ReactDOM.createRoot(document.getElementById(process.env.REACT_APP_YOUTUBE_API_KEY));
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
