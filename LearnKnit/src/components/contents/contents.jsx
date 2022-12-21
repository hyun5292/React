import React, { useEffect, useRef, useState } from "react";
import styles from "./contents.module.css";
import Lstyle from "../css/loading.module.css";
import MoreVideos from "../moreVideos/moreVideos.jsx";

const Contents = ({ moreVideos, menu, step, video, video: { snippet } }) => {
  const contRef = useRef();
  const { stepVideoId, stepCont } = step;
  const [isLoading, setIsLoading] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth - 240,
    height: (window.innerWidth / 7) * 3.5 - 240,
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
    const ref = contRef.current;
    return () => {
      const width = ref.offsetWidth;
      setWindowSize({
        width: width - 32,
        height: (width / 7) * 4,
      });
    };
  }, [menu, contRef]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [step, video]);

  return (
    <div ref={contRef} className={styles.contents}>
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
      <MoreVideos videos={moreVideos} />
    </div>
  );
};

export default Contents;
