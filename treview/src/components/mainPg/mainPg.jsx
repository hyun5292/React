import React from "react";
import styles from "./mainPg.module.css";
import Search from "../facSearchBar/facSearchBar.jsx";
import pgStyle from "../../css/page.module.css";

const MainPg = ({}) => {
  return (
    <div className={`${styles.mainPg} ${pgStyle.pg} ${pgStyle.pgPadding}`}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.introCont}>
        <div className={`${styles.introItem} ${styles.intro1}`}>
          <p className={styles.introTitle}>트리뷰(Treview)란?</p>
          <p>
            트럭(Truck) + 리뷰(Review)의 줄임말로
            <br />
            경기도 내 일반 화물업체(이사화물이 아닌 화물)의 운송을 주선하는
            <br />
            업체(소)의 정보를 검색할 수 있고
            <br />
            공장별 리뷰를 남길 수 있는 사이트입니다
          </p>
        </div>
        <div className={`${styles.introItem} ${styles.intro2}`}>
          <p className={styles.introTitle}>제작 동기는?</p>
          <p>
            화물차 기사이신 아빠가
            <br />
            매일 저녁마다 항상 공장마다의 특징, 직원들, 현장 상태 등을
            말씀하시고
            <br />
            동료 기사분들하고 공유한다는 얘기를 듣고
            <br />
            사이트를 만들면 좋겠다고 생각해서 만들게 되었습니다
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPg;
