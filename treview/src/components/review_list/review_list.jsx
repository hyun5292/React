import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import ReviewTable from "../review_table/review_table";
import styles from "./review_list.module.css";
import { AiOutlinePlus } from "react-icons/ai";

const ReviewList = (props) => {
  const navigate = useNavigate();
  const location = useLocation("");
  const { getReviewList } = useOutletContext();
  const [fData, setFData] = useState([]);
  const [rData, setRData] = useState([]);

  useEffect(() => {
    if (location.state) {
      setFData(location.state.fData);
      getReviewList(location.state.fData).then(
        (result) => result && setRData(result)
      );
    } else {
      alert("먼저 공장을 선택해주세요!");
      navigate("/search");
    }
  }, [getReviewList, location.state, navigate]);

  return (
    <div className={styles.reviewList}>
      <div className={styles.topBar}>
        <span className={styles.rTitle}>
          <span className={styles.rSigun}>{fData.SIGUN_NM}</span>
          <span className={styles.rBizplc}>{fData.BIZPLC_NM}</span>
          리뷰 목록
        </span>
        <button>
          <div className={styles.icon}>
            <AiOutlinePlus />
          </div>
          리뷰 작성하기
        </button>
      </div>
      <ReviewTable
        fInfo={{ SIGUN_NM: fData.SIGUN_NM, BIZPLC_NM: fData.BIZPLC_NM }}
        data={rData}
      />
    </div>
  );
};

export default ReviewList;
