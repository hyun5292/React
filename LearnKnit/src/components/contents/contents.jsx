import React from "react";
import styles from "./contents.module.css";
import Comments from "../comments/comments";

const Contents = ({ step }) => {
  const { stepId, stepTitle, stepVideoId, stepCont } = step;

  return (
    <div className={styles.Contents}>
      <p className={styles.title}>
        #{stepId} {stepTitle}
      </p>
      <div className={styles.videoWrap}>
        <img
          className={styles.video}
          src="./assets/youtube.png"
          alt="유튜브 임시 이미지"
        />
      </div>
      <div className={styles.info}>
        <p>
          {stepVideoId}
          <br />
          &nbsp;
          {stepCont}
        </p>
      </div>
      <Comments />
    </div>
  );
};

export default Contents;
