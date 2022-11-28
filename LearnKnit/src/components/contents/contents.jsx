import React, { useState } from "react";
import styles from "./contents.module.css";

const Contents = ({ step, video, video: { snippet } }) => {
  const { stepId, stepTitle, stepVideoId, stepCont } = step;
  const videoDate = new Date(snippet?.publishedAt);
  const newVDate =
    videoDate.getFullYear() +
    "년 " +
    (videoDate.getMonth() + 1) +
    "월 " +
    videoDate.getDay() +
    "일";

  return (
    <div className={styles.Contents}>
      <p className={styles.title}>
        #{stepId} {stepTitle}
      </p>
      <section className={styles.videoWrap}>
        <iframe
          className={styles.video}
          title={video.snippet?.title}
          type="text/html"
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${stepVideoId}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <h3 className={styles.videoTitle}>{snippet?.title}</h3>
      </section>
      <div className={styles.info}>
        <p>{newVDate}</p>
        <p>유튜브: {video.snippet?.channelTitle}</p>
        <pre className={styles.info_cont}>{stepCont}</pre>
      </div>
    </div>
  );
};

export default Contents;
