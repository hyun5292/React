import './app.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Video from './components/video';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC5ewrm4dgSFclcbwkBPpgxjR2gTZUPbWQ&=AIzaSyC5ewrm4dgSFclcbwkBPpgxjR2gTZUPbWQ", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <>
      <Header />
      <Video />
    </>
  );
}

export default App;
