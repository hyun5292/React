import React from "react";
import { useRef } from "react";
import styles from "./navbar.module.css";

const Navbar = ({ stepsData, handleStep }) => {
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
        <ul className={styles.menuList}>
          <li className={styles.menuTitle}>#1 코바늘</li>
          {stepsData.crochet.map((step) => {
            return (
              <li
                className={styles.menuItem}
                onClick={() => onChangeStep("crochet", step.stepId)}
                key={step.stepId}
              >
                #{step.stepId}
                &nbsp;{step.stepTitle}
              </li>
            );
          })}
        </ul>
        <ul className={styles.menuList}>
          <li className={styles.menuTitle}>#2 대바늘</li>
          {stepsData.knit.map((step) => {
            return (
              <li
                className={styles.menuItem}
                onClick={() => onChangeStep("knit", step.stepId)}
                key={step.stepId}
              >
                #{step.stepId}
                &nbsp;{step.stepTitle}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
