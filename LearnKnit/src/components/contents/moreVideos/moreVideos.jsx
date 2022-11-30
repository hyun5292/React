import React, { useState } from "react";
import styles from "./moreVideos.module.css";
import { FaChevronCircleDown, FaTimesCircle } from "react-icons/fa";

const MoreVideos = ({ youtube }) => {
  const [showV, setShowV] = useState(false);
  const [moreVideos, setMoreVideos] = useState(["왜"]);

  const handleMoreView = () => {
    setShowV(!showV);
    // youtube.search("crochet 링 만드는 법").then((videos) => {
    //   setMoreVideos(videos);
    // });
    console.log("Error = ", youtube.search("crochet 링 만드는 법"));
  };
  return (
    <div className={styles.moreVideos}>
      <button className={styles.searchBtn} onClick={() => handleMoreView()}>
        관련 영상보기
        {showV ? (
          <FaTimesCircle className={styles.moreIcon} />
        ) : (
          <FaChevronCircleDown className={styles.moreIcon} />
        )}
      </button>
    </div>
  );
};

export default MoreVideos;
