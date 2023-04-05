import React from "react";
import styles from "./video_detail.module.css";
import VideoItem from "../video_item/video_item";

const VideoDetail = ({ videoWidth, step, video, video: { snippet } }) => {
  const videoDate = new Date(snippet?.publishedAt);
  const newVDate =
    videoDate.getFullYear() +
    "년 " +
    (videoDate.getMonth() + 1) +
    "월 " +
    videoDate.getDay() +
    "일";

  return (
    <div className={styles.videoDetail}>
      <div className={styles.title}>
        {step.stepKind} - # {step.stepId} {step.stepTitle}
      </div>
      <VideoItem
        videoWidth={videoWidth}
        videoId={step.stepVideoId}
        video={video}
      />
      <div className={styles.infoCont}>
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
        <pre style={{ whiteSpace: "pre-wrap" }}>{step.stepCont}</pre>
      </div>
    </div>
  );
};

export default VideoDetail;
