import React, { useState, useEffect } from 'react';
import VideoList from './components/video_list/video_list';
import SearchHeader from './components/search_header/search_header';
import styles from './app.module.css';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  useEffect((query) => {    
    youtube
      .mostPopular(query)
      .then(videos => setVideos(videos));
  });

  const search = (query) => {
    youtube
      .search(query)
      .then(videos => setVideos(videos));
  };

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
