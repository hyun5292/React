import styles from "./app.module.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Contents from "./components/contents/contents";
import { useEffect, useState } from "react";
import Error from "./components/error/error";

function App({ stepsData, youtube }) {
  const kinds = Object.keys(stepsData);
  const dataL = kinds.map((kind) => {
    return stepsData[kind].length;
  });
  const [menu, setMenu] = useState(true);
  const [step, setStep] = useState(stepsData.crochet[0]);
  const [nowVideo, setNowVideo] = useState();
  const [moreVideos, setMoreVideos] = useState();

  const handleNavbar = () => {
    setMenu(!menu);
  };

  const handleStep = (kind, nowStep) => {
    switch (kind) {
      case "crochet":
        setStep(
          stepsData.crochet.filter((crochet) => crochet.stepId === nowStep)[0]
        );
        return;
      case "knit":
        setStep(stepsData.knit.filter((knit) => knit.stepId === nowStep)[0]);
        return;
      default:
        setStep(
          stepsData.crochet.filter((crochet) => crochet.stepId === "1-1")[0]
        );
        console.log("Error Wrong Step");
        return;
    }
  };

  useEffect(() => {
    const keyword = kinds[step.stepId.split("-")[0] - 1] + " " + step.stepTitle;
    youtube.getVideo(step.stepVideoId).then((video) => setNowVideo(video[0]));
    youtube.moreVideos(keyword).then((videos) => {
      setMoreVideos(videos);
    });
    //kinds는 배열이라 종속성으로 사용시 무한루프에 걸린다
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [youtube, step, stepsData /*kinds*/]);

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header
          menu={menu}
          step={step}
          kinds={kinds}
          dataL={dataL}
          handleStep={handleStep}
          handleNavbar={handleNavbar}
        />
      </div>
      <div className={styles.cont}>
        {menu ? (
          <div className={styles.navbar}>
            <Navbar
              stepsData={stepsData}
              kinds={kinds}
              handleStep={handleStep}
            />
          </div>
        ) : (
          ""
        )}
        {nowVideo && moreVideos ? (
          <div className={styles.contents}>
            <Contents
              moreVideos={moreVideos}
              menu={menu}
              step={step}
              video={nowVideo}
            />
          </div>
        ) : (
          <div className={styles.error}>
            <Error />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
