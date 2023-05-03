import React, { useEffect, useState } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import styles from "./review_edit.module.css";
import rStyle from "../../css/rForm.module.css";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import ReviewForm from "../review_form/review_form";

const ReviewEdit = (props) => {
  const location = useLocation("");
  const { uData, doEditReview, doDeleteReview } = useOutletContext();
  const [rData, setRData] = useState([]);
  const [today, setToday] = useState("");

  const onEditReview = (data) => {
    const newData = {
      ...rData,
      R_DATE: today,
      R_TITLE: data.R_TITLE,
      R_CONT: data.R_CONT,
    };
    doEditReview(newData);
  };

  const onDeleteReview = () => {
    doDeleteReview(rData);
  };

  useEffect(() => {
    if (location.state) {
      setRData(location.state.modifyFData);
    } else {
      alert("비정상적인 접근입니다!");
      window.history.go(-1);
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
    <div className={styles.reviewEdit}>
      <div className={rStyle.subTitle}>
        <div>
          <span className={rStyle.tSigun}>{rData.SIGUN_NM}</span> 리뷰{" "}
          {uData.uEmail === rData.U_ID ? "수정 및 삭제" : ""}
        </div>
        <BsChatSquareQuoteFill className={rStyle.subIcon} />
      </div>
      <ReviewForm
        chkUser={uData.uEmail === rData.U_ID ? false : true}
        rData={rData}
        btnList={
          uData.uEmail === rData.U_ID
            ? [
                { btnKey: 1, btnTitle: "수정하기", btnClick: onEditReview },
                { btnKey: 2, btnTitle: "삭제하기", btnClick: onDeleteReview },
              ]
            : ""
        }
      />
    </div>
  );
};

export default ReviewEdit;
