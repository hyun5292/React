import React from "react";
import styles from "./contents.module.css";
import Comments from "../comments/comments";

const Contents = ({ step, video, video: { snippet } }) => {
  const {
    stepId,
    stepTitle,
    stepVideoId,
    stepVideoChannel,
    stepVideoChId,
    stepCont,
  } = step;
  console.log(video[0].snippet);

  return (
    <div className={styles.Contents}>
      <p className={styles.title}>
        #{stepId} {stepTitle}
      </p>
      <section className={styles.videoWrap}>
        <iframe
          className={styles.video}
          title={video.snippet.title}
          type="text/html"
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        {/* <h2>{snippet.title}</h2>
        <h3>{snippet.channelTitle}</h3>
        <pre className={styles.description}>{snippet.description}</pre> */}
      </section>
      <div className={styles.info}>
        <p>유튜브: {stepVideoChannel}</p>
        <pre className={styles.info_cont}>{stepCont}</pre>
      </div>
      <Comments />
    </div>
  );
};

export default Contents;
