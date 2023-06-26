import React from "react";
import styles from "./mapPg.module.css";
import pStyle from "../../css/page.module.css";

const MapPg = (props) => {
  return (
    <div className={`${styles.mapPg} ${pStyle.default}`}>
      <div className={styles.title}>지도</div>
      <img
        className={styles.map_image}
        src="./images/example2.png"
        alt="지도 이미지"
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default MapPg;
