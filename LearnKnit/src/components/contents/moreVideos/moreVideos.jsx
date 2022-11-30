import React, { useState } from "react";
import styles from "./moreVideos.module.css";
import { FaChevronCircleDown, FaTimesCircle } from "react-icons/fa";

const MoreVideos = (props) => {
  const [showV, setShowV] = useState(false);

  const handleMoreView = () => {
    setShowV(!showV);
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
