import React, { useEffect, useState } from "react";
import styles from "./moreVideos.module.css";
import Lstyle from "../css/loading.module.css";
import { AiFillDownCircle, AiFillCloseCircle } from "react-icons/ai";
import VideoItem from "../videoItem/videoItem";
import Error from "../error/error";

const MoreVideos = ({ videos }) => {
  const [more, setMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onMore = () => {
    const newMore = !more;
    if (newMore) {
      setIsLoading(true);
      setMore(newMore);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      setMore(newMore);
    }
  };

  useEffect(() => {
    setMore(false);
  }, [videos]);

  return (
    <div className={styles.moreVideos}>
      <div className={styles.header}>
        {isLoading ? (
          <div className={Lstyle.loading} />
        ) : (
          <button className={styles.moreBtn} onClick={onMore}>
            {more ? (
              <>
                관련영상닫기
                <AiFillCloseCircle className={styles.moreIcon} />
              </>
            ) : (
              <>
                관련영상보기
                <AiFillDownCircle className={styles.moreIcon} />
              </>
            )}
          </button>
        )}
      </div>
      <ul className={more ? styles.videoList : styles.noUse}>
        {videos &&
          videos.map((video) => {
            return (
              <div key={video.snippet.id} className={styles.videoItem}>
                <VideoItem key={video.snippet.id} video={video} />
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default MoreVideos;
