import React from "react";
import styles from "./error.module.css";

const Error = (props) => {
  return (
    <div className={styles.error}>
      <span className={`${styles.box} ${styles.errorText}`}>
        죄송합니다!
        <br />
        유튜브 API에서 제공하는
        <br />
        하루에 사용할 수 있는 영상 횟수를
        <br />
        초과하였습니다!
        <br />
        내일 16:00 이후에 방문해주세요!
        <br />
        감사합니다! ^^
      </span>
      <span className={`${styles.box} ${styles.backBox1}`} />
      <span className={`${styles.box} ${styles.backBox2}`} />
    </div>
  );
};

export default Error;
