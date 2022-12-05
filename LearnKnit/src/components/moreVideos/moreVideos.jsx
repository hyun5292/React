import React, { useState } from "react";
import styles from "./moreVideos.module.css";
import { AiFillDownCircle, AiFillCloseCircle } from "react-icons/ai";

const MoreVideos = ({ youtube, keyword }) => {
  const [more, setMore] = useState(false);
  const [videos, setVideos] = useState([]);

  const handleMore = () => {
    const newMore = !more;
    setMore(newMore);
    youtube.moreVideos(keyword).then((videos) => {
      setVideos(videos);
    });
    console.log("videos = ", videos);
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
    </div>
  );
};

export default MoreVideos;
