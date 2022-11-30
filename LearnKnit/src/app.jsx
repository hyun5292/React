import styles from "./app.module.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Contents from "./components/contents/contents";
import { useEffect, useState } from "react";
import MoreVideos from "./components/contents/moreVideos/moreVideos";

function App({ stepsData, youtube }) {
  const firstVideo = youtube.getVideo(stepsData.crochet[0].stepVideoId);
  const [nowVideo, setNowVideo] = useState(firstVideo);
  const [menu, setMenu] = useState(true);
  const [step, setStep] = useState(stepsData.crochet[0]);

  const kinds = Object.keys(stepsData);
  const dataL = kinds.map((kind) => {
    return stepsData[kind].length;
  });
  const steps = step.stepId.split("-");
  const nowKIndex = steps[0] - 1;

  const handleNavbar = () => {
    setMenu(!menu);
  };

  const handlePrevStep = () => {
    steps[0] !== "1" && steps[1] === "1"
      ? handleStep(kinds[nowKIndex - 1], nowKIndex + "-" + dataL[nowKIndex - 1])
      : handleStep(kinds[nowKIndex], steps[0] + "-" + (steps[1] - 1));
  };

  const handleNextStep = () => {
    steps[0] !== kinds.length.toString() &&
    steps[1] === dataL[nowKIndex].toString()
      ? handleStep(kinds[nowKIndex + 1], parseInt(steps[0]) + 1 + "-" + 1)
      : handleStep(kinds[nowKIndex], steps[0] + "-" + (parseInt(steps[1]) + 1));
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
    youtube.getVideo(step.stepVideoId).then((video) => setNowVideo(video[0]));
  }, [youtube, step]);

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header
          menu={menu}
          stepId={step.stepId}
          stepTitle={step.stepTitle}
          kinds={kinds}
          dataL={dataL}
          handlePrevStep={handlePrevStep}
          handleNextStep={handleNextStep}
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
        {nowVideo && (
          <div className={styles.contents}>
            <Contents youtube={youtube} step={step} video={nowVideo} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
