import React, { useEffect, useState } from "react";
import styles from "./videoItem.module.css";

const VideoItem = ({ wSize, menu, video, video: { snippet } }) => {
  const [vSize, setVSize] = useState(
    window.innerWidth < 768
      ? {
          width: wSize.width + 12,
          height: wSize.height + 12,
        }
      : {
          width: (wSize.width - 36) / 2,
          height: (wSize.height - 36) / 2,
        }
  );

  useEffect(() => {
    const nowSize = wSize;
    setVSize(
      window.innerWidth < 768
        ? {
            width: nowSize.width + 12,
            height: nowSize.height + 12,
          }
        : {
            width: (nowSize.width - 28) / 2,
            height: (nowSize.height - 28) / 2,
          }
    );
  }, [wSize, menu]);

  return (
    <li className={styles.videoItem}>
      <iframe
        className={styles.video}
        title={video.snippet?.title}
        type="text/html"
        width={vSize.width}
        height={vSize.height}
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className={styles.videoTitle}>{snippet?.title}</div>
    </li>
  );
};

export default VideoItem;
