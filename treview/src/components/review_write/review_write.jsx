import React, { useEffect, useState } from "react";
import ReviewForm from "../review_form/review_form";
import { useLocation } from "react-router-dom";
import styles from "./review_write.module.css";
import { BsChatSquareQuoteFill } from "react-icons/bs";

const ReviewWrite = (props) => {
  const location = useLocation("");
  const [uData, setUData] = useState([]);
  const [fData, setFData] = useState([]);

  useEffect(() => {
    if (location.state) {
      setUData(location.state.uData);
      setFData(location.state.fData);
    }
  }, [location.state]);

  return (
    <div className={styles.reviewWrite}>
      <div className={styles.subTitle}>
        <div>
          <span className={styles.tSigun}>{fData.SIGUN_NM}</span> 리뷰 작성
        </div>
        <BsChatSquareQuoteFill className={styles.subIcon} />
      </div>
      <ReviewForm uEmail={uData.uEmail} BIZPLC_NM={fData.BIZPLC_NM} />
    </div>
  );
};

export default ReviewWrite;
