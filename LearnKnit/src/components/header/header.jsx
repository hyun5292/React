import React, { useState } from "react";
import styles from "./header.module.css";
import {
  AiFillCloseCircle,
  AiFillInfoCircle,
  AiFillLeftCircle,
  AiFillRightCircle,
} from "react-icons/ai";
import { useEffect } from "react";

const Header = ({
  menu,
  stepId,
  stepTitle,
  kinds,
  dataL,
  handlePrevStep,
  handleNextStep,
  handleNavbar,
}) => {
  const sId = stepId;
  const steps = sId.split("-");
  const lastStep = kinds.length + "-" + dataL[dataL.length - 1];
  const [prev, setPrev] = useState(sId === "1-1" ? false : true);
  const [next, setNext] = useState(sId === lastStep ? false : true);

  const onOffNavbar = () => {
    handleNavbar();
  };

  const onPrevStep = () => {
    handlePrevStep();
    // const nowKIndex = steps[0] - 1;

    // steps[0] !== "1" && steps[1] === "1"
    //   ? handlePrevStep(
    //       kinds[nowKIndex - 1],
    //       nowKIndex + "-" + dataL[nowKIndex - 1]
    //     )
    //   : handlePrevStep(kinds[nowKIndex], steps[0] + "-" + (steps[1] - 1));
  };

  const onNextStep = () => {
    handleNextStep();
    // const nowKIndex = steps[0] - 1;
    // steps[0] !== kinds.length.toString() &&
    // steps[1] === dataL[nowKIndex].toString()
    //   ? handleNextStep(kinds[nowKIndex + 1], parseInt(steps[0]) + 1 + "-" + 1)
    //   : handleNextStep(
    //       kinds[nowKIndex],
    //       steps[0] + "-" + (parseInt(steps[1]) + 1)
    //     );
  };

  useEffect(() => {
    //const lastStep = kinds.length + "-" + dataL[dataL.length - 1];
    setPrev(sId === "1-1" ? false : true);
    setNext(sId === lastStep ? false : true);
  }, [sId]);

  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <img
          className={styles.logo}
          src="./assets/siren.png"
          alt="사이트 로고"
        />
        {menu ? (
          <button className={styles.hideMenu} onClick={onOffNavbar}>
            <AiFillCloseCircle
              className={`${styles.icon} ${styles.closeIcon}`}
            />
            <span>메뉴 숨기기</span>
          </button>
        ) : (
          <button className={styles.hideMenu} onClick={onOffNavbar}>
            <AiFillInfoCircle className={`${styles.icon} ${styles.infoIcon}`} />
            <span>메뉴 펼치기</span>
          </button>
        )}
      </div>
      <div className={styles.cont}>
        <button
          className={prev ? styles.prev : styles.noUse}
          onClick={prev ? () => onPrevStep() : () => {}}
        >
          <AiFillLeftCircle className={`${styles.icon} ${styles.beforeIcon}`} />
          <span>이전 영상</span>
        </button>
        <span className={styles.title}>
          #{stepId} {stepTitle}
        </span>
        <button
          className={next ? styles.next : styles.noUse}
          onClick={next ? () => onNextStep() : () => {}}
        >
          <span>다음 영상</span>
          <AiFillRightCircle className={`${styles.icon} ${styles.afterIcon}`} />
        </button>
      </div>
    </div>
  );
};

export default Header;
