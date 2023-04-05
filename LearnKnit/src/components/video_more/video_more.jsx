import React, { useEffect, useState } from "react";
import styles from "./video_more.module.css";
import { AiFillDownCircle, AiFillCloseCircle } from "react-icons/ai";
import VideoItem from "../video_item/video_item";

const VideoMore = ({ videoWidth, videos }) => {
  const [more, setMore] = useState(true);
  const moreVideoWidth =
    window.innerWidth > 1024 ? videoWidth / 2 - 35 : videoWidth - 40;

  const clickMore = (event) => {
    event.preventDefault();
    setMore(!more);
  };

  useEffect(() => {
    setMore(false);
  }, [videos]);

  return (
    <div className={styles.videoMore}>
      <button className={styles.moreBtn} onClick={clickMore}>
        {more ? (
          <>
            <span>관련영상닫기</span>
            <AiFillCloseCircle className={styles.icon} />
          </>
        ) : (
          <>
            <span>관련영상보기</span>
            <AiFillDownCircle className={styles.icon} />
          </>
        )}
      </button>
      <ul className={more ? styles.videoList : styles.gone}>
        {videos &&
          videos.map((video) => {
            return (
              <div key={video.id} className={styles.videoItem}>
                <VideoItem
                  videoWidth={moreVideoWidth}
                  videoId={video.id}
                  video={video}
                />
                <div className={styles.videoTitle}>{video.snippet?.title}</div>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default VideoMore;
