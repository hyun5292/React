import React from "react";
import styles from "./navbar.module.css";
import stepsData from "../../db/stepsData.json";

const Navbar = (props) => {
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
              <li className={styles.menuItem} key={step.step}>
                #{step.step}
                &nbsp;{step.stepTitle}
              </li>
            );
          })}
        </ul>
        <ul className={styles.menuList}>
          <li className={styles.menuTitle}>#2 대바늘</li>
          {stepsData.knit.map((step) => {
            return (
              <li className={styles.menuItem} key={step.step}>
                #{step.step}
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
