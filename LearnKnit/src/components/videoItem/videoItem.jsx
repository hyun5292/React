import React from "react";
import styles from "./videoItem.module.css";

const VideoItem = ({ title }) => {
  return (
    <div className={styles.videoItem}>
      <h4>{title}</h4>
    </div>
  );
};

export default VideoItem;
