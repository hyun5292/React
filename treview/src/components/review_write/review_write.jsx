import React, { useEffect, useState } from "react";
import ReviewForm from "../review_form/review_form";
import { useLocation, useOutletContext } from "react-router-dom";
import styles from "./review_write.module.css";
import rStyle from "../../css/rForm.module.css";
import { BsChatSquareQuoteFill } from "react-icons/bs";

const ReviewWrite = (props) => {
  const location = useLocation("");
  const { doWriteReview } = useOutletContext();
  const [today, setToday] = useState();
  const [uData, setUData] = useState([]);
  const [fData, setFData] = useState([]);

  const onWriteReview = (rData) => {
    const result = {
      U_ID: uData.uEmail,
      F_ID:
        fData.F_ID ||
        (fData.SIGUN_NM + fData.REFINE_ROADNM_ADDR).replace(
          /[\s@-^$*+?.()|[\]{}:]/g,
          ""
        ),
      R_ID: (
        fData.BIZPLC_NM +
        uData.uDisplayName +
        today.replace(/[^0-9]/g, "")
      ).replace(/[\s@-^$*+?.()|[\]{}:]/g, ""),
      R_DATE: today,
      R_TITLE: rData.R_TITLE,
      R_CONT: rData.R_CONT,
      R_IMG: uData.uProfile,
    };
    doWriteReview(result, fData);
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
      <div className={rStyle.subTitle}>
        <div>
          <span className={rStyle.tSigun}>{fData.SIGUN_NM}</span> 리뷰 작성
        </div>
        <BsChatSquareQuoteFill className={rStyle.subIcon} />
      </div>
      <ReviewForm
        rData={{
          BIZPLC_NM: fData.BIZPLC_NM,
          R_DATE: today,
          U_ID: uData.uEmail,
        }}
        btnList={[{ btnKey: 1, btnTitle: "작성하기", btnClick: onWriteReview }]}
      />
    </div>
  );
};

export default ReviewWrite;
