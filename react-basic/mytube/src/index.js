import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import qs from 'qs';
import axios from 'axios';
import Youtube from './service/youtube';

const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});
const youtube = new Youtube(httpClient);
// const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);
