import React from "react";
import styles from "./videoItem.module.css";

const VideoItem = ({ video, video: { snippet } }) => {
  return (
    <li className={styles.videoItem}>
      <iframe
        className={styles.video}
        title={video.snippet?.title}
        type="text/html"
        width="100%"
        height="250px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <span className={styles.videoTitle}>{snippet?.title}</span>
    </li>
  );
};

export default VideoItem;
