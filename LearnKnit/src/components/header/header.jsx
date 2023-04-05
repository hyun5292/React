import React from "react";
import styles from "./header.module.css";
import {
  AiFillCloseCircle,
  AiFillInfoCircle,
  AiFillLeftCircle,
  AiFillRightCircle,
} from "react-icons/ai";

const Header = ({ prev, next, menu, step, handleMenu, handleStep }) => {
  const onChangeMenu = (event) => {
    event.preventDefault();
    handleMenu();
  };

  const onPrevStep = (event) => {
    event.preventDefault();
    const steps = step.stepId.split("-");
    handleStep(step.stepKind, [steps[0], parseInt(steps[1]) - 1]);
  };

  const onNextStep = (event) => {
    event.preventDefault();
    const steps = step.stepId.split("-");
    handleStep(step.stepKind, [steps[0], parseInt(steps[1]) + 1]);
  };

  return (
    <div className={styles.header}>
      <div className={styles.menu}>
        <img
          className={styles.logo}
          src="./assets/learnKnit.png"
          width="40px"
          height="auto"
          alt="사이트 로고"
        />
        <button className={styles.hideMenu} onClick={onChangeMenu}>
          {menu ? (
            <>
              <AiFillCloseCircle className={styles.icon} />
              <span className={styles.btnText}>메뉴 숨기기</span>
            </>
          ) : (
            <>
              <AiFillInfoCircle className={styles.icon} />
              <span className={styles.btnText}>메뉴 펼치기</span>
            </>
          )}
        </button>
      </div>
      <div className={styles.content}>
        <button
          className={prev ? "" : styles.noUse}
          onClick={prev ? onPrevStep : () => {}}
        >
          <AiFillLeftCircle className={styles.icon} />
          <span className={styles.btnText}>이전 영상</span>
        </button>
        <span className={styles.title}>
          {step.stepKind} - # {step.stepId} {step.stepTitle}
        </span>
        <button
          className={next ? "" : styles.noUse}
          onClick={next ? onNextStep : () => {}}
        >
          <span className={styles.btnText}>다음 영상</span>
          <AiFillRightCircle className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default Header;
