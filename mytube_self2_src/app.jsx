import './app.css';
import { useEffect, useState } from 'react';
import Header from './components/header';
import Videos from './components/videos';

function App() {
  const [playList, setPlayList] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC5ewrm4dgSFclcbwkBPpgxjR2gTZUPbWQ&=AIzaSyC5ewrm4dgSFclcbwkBPpgxjR2gTZUPbWQ", requestOptions)
      .then(response => response.text())
      .then(result => setPlayList(result))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <>
      <Header />
      <Videos
        playList={playList}
      />
    </>
  );
}

export default App;
