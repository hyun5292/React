import './app.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header';
import Videos from './components/videos';
import Detail from './components/videoDetail';

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
      <BrowserRouter>
        <Route path="/" exact element={<Videos playList={playList} />} />
        <Route path="/detail" component={Detail} />
      </BrowserRouter>
    </>
  );
}

export default App;
