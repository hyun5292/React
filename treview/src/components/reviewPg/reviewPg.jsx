import React, { useEffect, useState } from "react";
import ReviewTable from "../reviewTable/reviewTable";
import styles from "./reviewPg.module.css";
import pgStyle from "../../css/page.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const ReviewPg = (props) => {
  const location = useLocation("");
  const [fData, setFData] = useState(null);

  useEffect(() => {
    location.state ? setFData(location.state.fData) : setFData(null);
  }, [location.state]);

  return (
    <div className={`${styles.reviewPg} ${pgStyle.pgMargin}`}>
      <div className={styles.topBar}>
        <span className={styles.rTitle}>
          <span className={styles.rSigun}>
            {fData !== null ? fData.SIGUN_NM : "시군명"}
          </span>
          <span className={styles.rBizplc}>
            {fData !== null ? fData.BIZPLC_NM : "사업장명"}
          </span>
          리뷰 목록
        </span>
        <a href="/writeReview" className={styles.newRBtn}>
          <div className={styles.icon}>
            <AiOutlinePlus />
          </div>
          리뷰 작성하기
        </a>
      </div>
      <ReviewTable />
    </div>
  );
};

export default ReviewPg;
