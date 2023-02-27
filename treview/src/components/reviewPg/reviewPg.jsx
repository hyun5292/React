import React, { useEffect, useState } from "react";
import ReviewTable from "../reviewTable/reviewTable";
import styles from "./reviewPg.module.css";
import pgStyle from "../../css/page.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

const ReviewPg = (props) => {
  const navigate = useNavigate();
  const location = useLocation("");
  const [fData, setFData] = useState(null);

  useEffect(() => {
    location.state ? setFData(location.state.fData) : setFData(null);
  }, [location.state]);

  return (
    <div className={`${styles.reviewPg} ${pgStyle.pgPadding}`}>
      <div className={styles.topBar}>
        <span className={styles.rTitle}>
          <span className={styles.rSigun}>{fData && fData.SIGUN_NM}</span>
          <span className={styles.rBizplc}>{fData && fData.BIZPLC_NM}</span>
          리뷰 목록
        </span>
        {fData ? (
          <div
            className={styles.newRBtn}
            onClick={() => navigate(`/writeReview`, { state: { fData } })}
          >
            <div className={styles.icon}>
              <AiOutlinePlus />
            </div>
            리뷰 작성하기
          </div>
        ) : (
          <a href="/search" className={styles.newRBtn}>
            리뷰 작성할 공장을 선택해주세요
          </a>
        )}
      </div>
      <ReviewTable />
    </div>
  );
};

export default ReviewPg;
