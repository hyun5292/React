import React, { useEffect, useState } from "react";
import styles from "./contents.module.css";
import Lstyle from "../css/loading.module.css";
import MoreVideos from "../moreVideos/moreVideos.jsx";

const Contents = ({ moreVideos, step, video, video: { snippet } }) => {
  const { stepVideoId, stepCont } = step;
  const [isLoading, setIsLoading] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth - 32,
    height: ((window.innerWidth - 32) / 7) * 3.5,
  });
  const videoDate = new Date(snippet?.publishedAt);
  const newVDate =
    videoDate.getFullYear() +
    "년 " +
    (videoDate.getMonth() + 1) +
    "월 " +
    videoDate.getDay() +
    "일";

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [step, video]);

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth - 32,
      height: ((window.innerWidth - 32) / 7) * 3.5,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.contents}>
      <section className={styles.videoWrap}>
        {isLoading ? (
          <div className={Lstyle.loading} />
        ) : (
          <iframe
            className={styles.video}
            title={video.snippet?.title}
            type="text/html"
            width={windowSize.width}
            height={windowSize.height}
            src={`https://www.youtube.com/embed/${stepVideoId}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
        <div className={styles.videoTitle}>{snippet?.title}</div>
      </section>
      <div className={styles.info}>
        <p>{newVDate}</p>
        <p>
          유튜브:
          <a
            className={styles.channelLink}
            href={"https://www.youtube.com/channel/" + video.snippet?.channelId}
          >
            {video.snippet?.channelTitle}
          </a>
        </p>
        <pre style={{ whiteSpace: "pre-wrap" }} className={styles.info_cont}>
          {stepCont}
        </pre>
      </div>
      <MoreVideos videos={moreVideos} />
    </div>
  );
};

export default Contents;
