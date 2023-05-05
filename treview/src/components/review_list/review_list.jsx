import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import ReviewTable from "../review_table/review_table";
import RSearchBar from "../review_search_bar/review_search_bar";
import ResetBtn from "../reset_btn/reset_btn";
import styles from "./review_list.module.css";
import pStyle from "../../css/page.module.css";
import { AiOutlinePlus } from "react-icons/ai";

const ReviewList = () => {
  const navigate = useNavigate();
  const location = useLocation("");
  const { uData, getReviewList, getSearchReview, goReviewWrite } =
    useOutletContext();
  const [fData, setFData] = useState([]);
  const [rData, setRData] = useState([]);

  const searchReview = (keyword) => {
    getSearchReview(fData, keyword).then(
      (result) => result && setRData(result)
    );
  };

  const handleReset = () => {
    getReviewList(fData).then((result) => result && setRData(result));
  };

  const goWritePage = (event) => {
    event.preventDefault();
    goReviewWrite(uData, fData);
  };

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
    <div className={`${styles.reviewList} ${pStyle.page}`}>
      <div className={styles.topBar}>
        <span className={styles.rTitle}>
          <span className={styles.rSigun}>{fData.SIGUN_NM}</span>
          <span className={styles.rBizplc}>{fData.BIZPLC_NM}</span>
          리뷰 목록
        </span>
        {uData.uId ? (
          <button className={styles.newRBtn} onClick={goWritePage}>
            <div className={styles.icon}>
              <AiOutlinePlus />
            </div>
            리뷰 작성하기
          </button>
        ) : (
          <></>
        )}
      </div>
      <ReviewTable
        fInfo={{ SIGUN_NM: fData.SIGUN_NM, BIZPLC_NM: fData.BIZPLC_NM }}
        data={rData}
      />
      <div className={styles.revSearch}>
        <RSearchBar searchReview={searchReview} />
        <ResetBtn onReset={handleReset} />
      </div>
    </div>
  );
};

export default ReviewList;
