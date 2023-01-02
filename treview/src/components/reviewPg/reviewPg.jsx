import React from "react";
import ReviewTable from "../reviewTable/reviewTable";
import styles from "./reviewPg.module.css";

const ReviewPg = (props) => {
  return (
    <div className={styles.reviewPg}>
      <div className={styles.topBar}>
        <span className={styles.rTitle}>리뷰 목록</span>
        <button className={styles.newRBtn}>리뷰 작성하기</button>
      </div>
      <ReviewTable />
    </div>
  );
};

export default ReviewPg;
