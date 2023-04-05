import React from "react";
import styles from "./video_item.module.css";
import Loading from "../loading/loading";

const VideoItem = ({ videoWidth, videoId, video }) => {
  const width = videoWidth > 1200 ? 1200 : videoWidth;
  return (
    <div className={styles.videoItem}>
      <Loading />
      <iframe
        title={video.snippet?.title}
        type="text/html"
        width={width}
        height={(width / 7) * 4}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoItem;
