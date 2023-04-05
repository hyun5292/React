import { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import VideoDetail from "./components/video_detail/video_detail";
import VideoMore from "./components/video_more/video_more";
import Error from "./components/error/error";

function App({ stepsData, youtube }) {
  const [menu, setMenu] = useState(true);
  const [nowStep, setNowStep] = useState({
    ...stepsData["코바늘"][0],
    stepKind: "코바늘",
  });
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(true);
  const [nowVideo, setNowVideo] = useState({});
  const [moreVideos, setMoreVideos] = useState([]);
  const [videoWidth, setVideoWidth] = useState(window.innerWidth - 460);
  const kinds = Object.keys(stepsData);
  const lastKind = kinds[kinds.length - 1];
  const lastId = kinds.length + "-" + parseInt(stepsData[lastKind].length);

  const handleClickMenu = () => {
    const newMenu = !menu;
    const nowWidth = videoWidth;
    setMenu(newMenu);
    if (window.innerWidth > 1024) {
      newMenu ? setVideoWidth(nowWidth - 320) : setVideoWidth(nowWidth + 320);
    } else if (window.innerWidth <= 768) {
      setVideoWidth(nowWidth - 260);
    } else {
      setVideoWidth(nowWidth - 320);
    }
  };

  const handleResize = useCallback(() => {
    if (menu && window.innerWidth > 1024) {
      setVideoWidth(window.innerWidth - 460);
    } else {
      if (window.innerWidth < 768) {
        setVideoWidth(window.innerWidth - 80);
      } else {
        setVideoWidth(window.innerWidth - 140);
      }
    }
  }, [menu]);

  const changeStep = (kind, id) => {
    const now_last_index = stepsData[kind].length;

    switch (id[0] + "-" + id[1]) {
      case "1-1":
        setPrev(false);
        setNext(true);
        break;
      case lastId:
        setPrev(true);
        setNext(false);
        break;
      default:
        setPrev(true);
        setNext(true);
        break;
    }

    if (id[1] > now_last_index) {
      let newKind = kinds[id[0]];
      let newId = parseInt(id[0]) + 1 + "-1";
      let newData = stepsData[newKind].filter(
        (step) => step.stepId === newId
      )[0];

      setNowStep({
        ...newData,
        stepKind: newKind,
      });
    } else if (id[1] === 0) {
      let newKindId = parseInt(id[0]) - 1;
      let newKind = kinds[newKindId - 1];
      let before_last_index = stepsData[newKind].length;
      let newId = newKindId + "-" + before_last_index;
      let newData = stepsData[newKind].filter(
        (step) => step.stepId === newId
      )[0];

      setNowStep({
        ...newData,
        stepKind: newKind,
      });
    } else {
      let newId = id[0] + "-" + id[1];
      let newData = stepsData[kind].filter((step) => step.stepId === newId)[0];

      setNowStep({
        ...newData,
        stepKind: kind,
      });
    }
  };

  useEffect(() => {
    const keyword =
      kinds[nowStep.stepId.split("-")[0] - 1] + " " + nowStep.stepTitle;
    youtube
      .getVideo(nowStep.stepVideoId)
      .then((video) => setNowVideo(video[0]));
    youtube.moreVideos(keyword).then((videos) => {
      setMoreVideos(videos);
    });
    //kinds는 배열이라 종속성으로 사용시 무한루프에 걸린다
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [youtube, nowStep, stepsData /*kinds*/]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div className={menu ? styles.app : `${styles.app} ${styles.videoWidth}`}>
      <div className={styles.header}>
        <Header
          prev={prev}
          next={next}
          menu={menu}
          step={nowStep}
          handleClickMenu={handleClickMenu}
          changeStep={changeStep}
        />
      </div>
      <div className={menu ? styles.menu : styles.gone}>
        <Menu stepsData={stepsData} changeStep={changeStep} />
      </div>
      {nowVideo && moreVideos ? (
        <div className={styles.videoCont}>
          <div className={styles.videoDetail}>
            <VideoDetail
              videoWidth={videoWidth}
              step={nowStep}
              video={nowVideo}
            />
          </div>
          <div className={styles.videoMore}>
            <VideoMore videoWidth={videoWidth} videos={moreVideos} />
          </div>
        </div>
      ) : (
        <div className={styles.error}>
          <Error />{" "}
        </div>
      )}
    </div>
  );
}

export default App;
