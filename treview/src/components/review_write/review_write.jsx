import React, { useEffect, useState } from "react";
import ReviewForm from "../review_form/review_form";
import { useLocation, useOutletContext } from "react-router-dom";
import styles from "./review_write.module.css";
import { BsChatSquareQuoteFill } from "react-icons/bs";

const ReviewWrite = (props) => {
  const location = useLocation("");
  const [today, setToday] = useState();
  const [uData, setUData] = useState([]);
  const [fData, setFData] = useState([]);

  const onWriteReview = (rData) => {
    console.log("rData = ", rData);
  };

  useEffect(() => {
    if (location.state) {
      setUData(location.state.uData);
      setFData(location.state.fData);
    }
  }, [location.state]);

  useEffect(() => {
    const date = new Date();
    const now =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " " +
      date.getHours().toString() +
      ":" +
      date.getMinutes().toString() +
      ":" +
      date.getSeconds().toString();
    setToday(now);
  }, []);

  return (
    <div className={styles.reviewWrite}>
      <div className={styles.subTitle}>
        <div>
          <span className={styles.tSigun}>{fData.SIGUN_NM}</span> 리뷰 작성
        </div>
        <BsChatSquareQuoteFill className={styles.subIcon} />
      </div>
      <ReviewForm
        BIZPLC_NM={fData.BIZPLC_NM}
        today={today}
        uEmail={uData.uEmail}
        btnList={[{ btnKey: 1, btnTitle: "작성하기", btnClick: onWriteReview }]}
      />
    </div>
  );
};

export default ReviewWrite;
