import React, { useState } from "react";
import styles from "./searchVideos.searchVideos.css";

const SearchVideos = (props) => {
  const [showV, setShowV] = useState(false);
  return (
    <div className={styles.SearchVideos}>
      <button>더 많은 영상보기</button>
    </div>
  );
};

export default SearchVideos;
