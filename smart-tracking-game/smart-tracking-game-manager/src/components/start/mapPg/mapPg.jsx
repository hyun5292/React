import React from "react";
import styles from "./mapPg.module.css";
import pStyle from "../../../css/page.module.css";

const MapPg = (props) => {
  return (
    <div className={`${styles.mapPg} ${pStyle.default}`}>
      <div className={pStyle.title}>지도</div>
      <div className={pStyle.content}>
        <img
          className={styles.map_image}
          src="./images/example2.png"
          alt="지도 이미지"
          width="90%"
          height="auto"
        />
        <div className={styles.map_btns}>
          <button>초기화</button>
          <button>저장하기</button>
        </div>
      </div>
    </div>
  );
};

export default MapPg;
