import React from "react";
import ReviewTable from "../reviewTable/reviewTable";
import styles from "./reviewPg.module.css";
import { AiOutlinePlus } from "react-icons/ai";

const ReviewPg = (props) => {
  return (
    <div className={styles.reviewPg}>
      <div className={styles.topBar}>
        <span className={styles.rTitle}>
          <span className={styles.rSigun}>시군명</span>
          <span className={styles.rBizplc}>사업장명</span>
          리뷰 목록
        </span>
        <button className={styles.newRBtn}>
          <div className={styles.icon}>
            <AiOutlinePlus />
          </div>
          리뷰 작성하기
        </button>
      </div>
      <ReviewTable />
    </div>
  );
};

export default ReviewPg;
