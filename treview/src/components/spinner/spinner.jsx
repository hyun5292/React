import React from "react";
import styles from "./spinner.module.css";

const Spinner = (props) => (
  <div className={styles.spinner}>
    <div className={styles.spCircle}></div>
    <div className={styles.spText}>트리뷰</div>
  </div>
);

export default Spinner;
