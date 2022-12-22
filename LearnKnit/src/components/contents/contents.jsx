import React, { useEffect, useRef, useState } from "react";
import styles from "./contents.module.css";
import Lstyle from "../css/loading.module.css";
import MoreVideos from "../moreVideos/moreVideos.jsx";

const Contents = ({ moreVideos, menu, step, video, video: { snippet } }) => {
  const videoRef = useRef();
  const { stepVideoId, stepCont } = step;
  const [isLoading, setIsLoading] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth - 240,
    height: ((window.innerWidth - 240) / 7) * 4,
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

  useEffect(() => {
    const ref = videoRef.current;
    return () => {
      const width = ref.offsetWidth - 32;
      setWindowSize({
        width: width,
        height: (width / 7) * 4,
      });
    };
  }, [menu]);

  return (
    <div className={styles.contents}>
      <section ref={videoRef} className={styles.videoWrap}>
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
          유튜브:&nbsp;
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
      <MoreVideos wSize={windowSize} menu={menu} videos={moreVideos} />
    </div>
  );
};

export default Contents;
