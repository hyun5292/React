import React from "react";
import styles from "./mapPg.module.css";
import pStyle from "../../css/page.module.css";
import { RiArrowGoBackFill } from "react-icons/ri";

const MapPg = (props) => {
  return (
    <div className={`${styles.mapPg} ${pStyle.default}`}>
      {/* <button className={styles.back_btn}>
        <RiArrowGoBackFill />
      </button> */}
      <div className={styles.title}>지도</div>
      <img
        className={styles.map_image}
        src="./images/example.jpg"
        alt="지도 이미지"
        width="280px"
        height="auto"
      />
    </div>
  );
};

export default MapPg;
