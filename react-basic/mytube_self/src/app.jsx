import { useEffect, useCallback, useState } from 'react';
import './app.css';
import Header from './components/header';
import Videos from './components/videos';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState([]);

  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      youtube
        .search(query)
        .then((vidoes) => setVideos(videos));
    },
    [youtube],
  );

  useEffect(() => {
    youtube 
      .mostPopular()
      .then((videos) => setVideos(videos));
  }, [youtube]);

  console.log(videos);
  return (
    <>
      <Header />
      <Videos
        videos={videos}
        display={selectedVideo ? 'list' : 'grid'}
      />
    </>
  );
}

export default App;
