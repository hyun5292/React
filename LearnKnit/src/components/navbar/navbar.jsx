import React from "react";
import styles from "./navbar.module.css";
import stepsData from "../../db/stepsData.json";

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.menu}>
        <ul className={styles.menuList}>
          {stepsData.crochet.map((step) => {
            return (
              <li className={styles.menuItem} key={step.stepVideoId}>
                {step.stepTitle}
              </li>
            );
          })}
          {stepsData.knit.map((step) => {
            return (
              <li className={styles.menuItem} key={step.stepVideoId}>
                {step.stepTitle}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
