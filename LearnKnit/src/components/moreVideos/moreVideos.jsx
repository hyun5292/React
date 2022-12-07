import React, { useState } from "react";
import styles from "./moreVideos.module.css";
import { AiFillDownCircle, AiFillCloseCircle } from "react-icons/ai";
import VideoItem from "../videoItem/videoItem";

const MoreVideos = ({ youtube, keyword }) => {
  const [more, setMore] = useState(false);
  const [videos, setVideos] = useState();

  const handleMore = () => {
    const newMore = !more;
    youtube.moreVideos(keyword).then((videos) => {
      setVideos(videos);
      setMore(newMore);
    });
  };

  return (
    <div className={styles.moreVideos}>
      <button className={styles.moreBtn} onClick={handleMore}>
        관련영상보기
        {more ? (
          <AiFillCloseCircle className={styles.moreIcon} />
        ) : (
          <AiFillDownCircle className={styles.moreIcon} />
        )}
      </button>
      <div className={styles.videos}>
        {videos &&
          videos.map((video) => {
            return (
              <VideoItem key={video.snippet.id} title={video.snippet.title} />
            );
          })}
      </div>
    </div>
  );
};

export default MoreVideos;
