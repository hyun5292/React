import React, { useState } from "react";
import styles from "./moreVideos.module.css";
import { AiFillDownCircle, AiFillCloseCircle } from "react-icons/ai";
import VideoItem from "../videoItem/videoItem";
import { useEffect } from "react";

const MoreVideos = ({ youtube, keyword }) => {
  const [more, setMore] = useState(false);
  const [videos, setVideos] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleMore = () => {
    const newMore = !more;
    if (newMore) {
      setIsLoading(true);
      youtube.moreVideos(keyword).then((videos) => {
        setVideos(videos);
        setMore(newMore);
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setMore(newMore);
      setVideos(null);
    }
  };

  useEffect(() => {
    setMore(false);
    setVideos(null);
    setIsLoading(false);
  }, [keyword]);

  return (
    <div className={styles.moreVideos}>
      <div className={styles.header}>
        {isLoading ? (
          <div className={styles.loading} />
        ) : (
          <button className={styles.moreBtn} onClick={handleMore}>
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
            return <VideoItem key={video.snippet.id} video={video} />;
          })}
      </ul>
    </div>
  );
};

export default MoreVideos;
