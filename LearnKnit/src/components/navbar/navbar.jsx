import React from "react";
import styles from "./navbar.module.css";

const Navbar = ({ stepsData, kinds, handleStep }) => {
  const onChangeStep = (kind, nowStep) => {
    handleStep(kind, nowStep);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <span>제작자:</span>
          <a href="https://sudol5292.netlify.app/">소개사이트</a>
        </div>
        <div className={styles.infoItem}>
          <span>인스타:</span>
          <a href="https://www.instagram.com/green_frog_grog/">
            @green_frog_grog
          </a>
        </div>
        <div className={styles.infoItem}>
          <span>오늘의 집:</span>
          <a href="https://ozip.me/WukFaq2">구경가기</a>
        </div>
      </div>
      <div className={styles.menu}>
        {kinds.map((kind) => {
          const nowStep = stepsData[kind][0].stepId.split("-")[0];

          return (
            <ul className={styles.menuList} key={kind}>
              <li className={styles.menuTitle}>
                #{nowStep} {kind}
              </li>
              {stepsData[kind].map((step) => {
                return (
                  <li
                    className={styles.menuItem}
                    onClick={() => onChangeStep(kind, step.stepId)}
                    key={step.stepVideoId}
                  >
                    #{step.stepId}
                    &nbsp;{step.stepTitle}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
