import React from "react";
import styles from "./loading.module.css";

const Loading = (props) => {
  return (
    <div className={styles.loading}>
      <div className={styles.loading_circle}></div>
      <div className={styles.loading_text}>트리뷰</div>
    </div>
  );
};

export default Loading;
