import React from "react";
import styles from "./navbar.module.css";
import stepsData from "../../db/stepsData.json";

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          <li className={styles.menuTitle}>#1 코바늘</li>
          {stepsData.crochet.map((step) => {
            return (
              <li className={styles.menuItem} key={step.stepVideoId}>
                {step.step}
                &nbsp;{step.stepTitle}
              </li>
            );
          })}
        </ul>
        <ul className={styles.menuList}>
          <li className={styles.menuTitle}>#2 대바늘</li>
          {stepsData.knit.map((step) => {
            return (
              <li className={styles.menuItem} key={step.stepVideoId}>
                {step.step}
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
