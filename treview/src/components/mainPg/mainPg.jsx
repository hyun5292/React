import React from "react";
import styles from "./mainPg.module.css";
import Search from "../facSearchBar/facSearchBar.jsx";
import pgStyle from "../../css/page.module.css";

const MainPg = ({}) => {
  return (
    <div className={`${styles.mainPg} ${pgStyle.pg} ${pgStyle.pgPadding}`}>
      <span className={styles.backImg}></span>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.introCont}>
        <div className={styles.title}>트리뷰(Treview)란?</div>
        트럭(Truck) + 리뷰(Review)의 줄임말로
        <br />
        경기도 내 일반 화물업체(이사화물이 아닌 화물)의 운송을 주선하는
        업체(소)의
        <br />
        정보를 검색할 수 있고
        <br />
        공장별 리뷰를 남길 수 있는 사이트입니다.
      </div>
    </div>
  );
};

export default MainPg;
