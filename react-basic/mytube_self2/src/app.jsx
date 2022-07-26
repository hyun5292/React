import './app.css';
import { useEffect, useState } from 'react';
import Header from './components/header';
import Videos from './components/videos';
import axios from 'axios';

function App() {
  const [playList, setPlayList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=UCkuA_gDjISfGgbdp02BUwyQ&maxResults=10&key=AIzaSyC5ewrm4dgSFclcbwkBPpgxjR2gTZUPbWQ"
      )
      .then((res) => {
        console.log(res);
        setPlayList(res.data.items);
      })
      .catch(() => {})
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
