import styles from "./app.module.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Contents from "./components/contents/contents";
import { useState } from "react";

function App({ stepsData }) {
  const [menu, setMenu] = useState(true);
  const [stepId, setStepId] = useState("1-1");
  const [step, setStep] = useState(stepsData.crochet[0]);

  const kinds = Object.keys(stepsData);
  const dataL = kinds.map((kind) => {
    return stepsData[kind].length;
  });

  const handleNavbar = () => {
    setMenu(!menu);
  };

  const handlePrevStep = () => {
    const steps = stepId.split("-");
    const nowKIndex = steps[0] - 1;

    steps[0] !== "1" && steps[1] === "1"
      ? handleStep(kinds[nowKIndex - 1], nowKIndex + "-" + dataL[nowKIndex - 1])
      : handleStep(kinds[nowKIndex], steps[0] + "-" + (steps[1] - 1));
  };

  const handleNextStep = (kind, nowStep) => {
    const steps = stepId.split("-");
    const nowKIndex = steps[0] - 1;

    steps[0] !== kinds.length.toString() &&
    steps[1] === dataL[nowKIndex].toString()
      ? handleStep(kinds[nowKIndex + 1], parseInt(steps[0]) + 1 + "-" + 1)
      : handleStep(kinds[nowKIndex], steps[0] + "-" + (parseInt(steps[1]) + 1));
  };

  const handleStep = (kind, nowStep) => {
    setStepId(nowStep);
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

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header
          menu={menu}
          stepId={stepId}
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
        <div className={styles.contents}>
          <Contents step={step} />
        </div>
      </div>
    </div>
  );
}

export default App;
