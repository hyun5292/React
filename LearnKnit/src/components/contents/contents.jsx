import React, { useState } from "react";
import styles from "./contents.module.css";
import Comments from "../comments/comments";

const Contents = ({ step, video, video: { snippet } }) => {
  const { stepId, stepTitle, stepVideoId, stepCont } = step;

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
        <h2>{snippet?.title}</h2>
        <h3>{snippet?.channelTitle}</h3>
        <pre className={styles.description}>{snippet?.description}</pre>
      </section>
      <div className={styles.info}>
        {/* <p>유튜브: {video.snippet.channelTitle}</p> */}
        <pre className={styles.info_cont}>{stepCont}</pre>
      </div>
      <Comments />
    </div>
  );
};

export default Contents;
