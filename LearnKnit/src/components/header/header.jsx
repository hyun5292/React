import React from "react";
import styles from "./header.module.css";
import {
  AiFillCloseCircle,
  AiFillInfoCircle,
  AiFillLeftCircle,
  AiFillRightCircle,
} from "react-icons/ai";

const Header = ({ menu, stepId, handleStep, handleNavbar }) => {
  const onOffNavbar = () => {
    handleNavbar();
  };

  const onPrevStep = () => {
    const step = stepId.split("-");
    const prevStep = step[0] + "-" + (parseInt(step[1]) - 1);
    handleStep(step[0], prevStep);
  };
  const onNextStep = () => {
    const step = stepId.split("-");
    const nextStep = step[0] + "-" + (parseInt(step[1]) + 1);
    handleStep(step[0], nextStep);
  };

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
        <button className={styles.prev} onClick={() => onPrevStep()}>
          <AiFillLeftCircle className={`${styles.icon} ${styles.beforeIcon}`} />
          <span>이전 영상</span>
        </button>
        {stepId}
        <button className={styles.next} onClick={() => onNextStep()}>
          <span>다음 영상</span>
          <AiFillRightCircle className={`${styles.icon} ${styles.afterIcon}`} />
        </button>
      </div>
    </div>
  );
};

export default Header;
