import React, { useEffect, useState } from "react";
import styles from "./reviewPg.module.css";
import pgStyle from "../../css/page.module.css";
import ReviewTable from "../reviewTable/reviewTable";
import RevSearchBar from "../revSearchBar/revSearchBar";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowClockwise } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

const ReviewPg = ({ uId, revService }) => {
  const navigate = useNavigate();
  const location = useLocation("");
  const [fData, setFData] = useState([]);
  const [rData, setRData] = useState([]);

  const searchReview = (event, keyword) => {
    event.preventDefault();
    revService.searchReview(fData, keyword).then((result) => {
      result && setRData(result);
    });
  };

  const getAllList = () => {
    revService.getReviewList(fData).then((result) => {
      result && setRData(result);
    });
  };

  useEffect(() => {
    if (location.state) {
      setFData(location.state.fData);
      revService.getReviewList(fData).then((result) => {
        result && setRData(result);
      });
    } else {
      alert("먼저 공장을 선택해주세요!");
      navigate("/search");
    }
  }, [fData, location.state, navigate, revService]);

  return (
    <div className={`${styles.reviewPg} ${pgStyle.pgPadding}`}>
      <div className={styles.topBar}>
        <span className={styles.rTitle}>
          <span className={styles.rSigun}>{fData && fData.SIGUN_NM}</span>
          <span className={styles.rBizplc}>{fData && fData.BIZPLC_NM}</span>
          리뷰 목록
        </span>
        {uId ? (
          <button
            className={styles.newRBtn}
            onClick={() =>
              navigate(`/writeReview`, {
                state: {
                  writeFData: fData,
                },
              })
            }
          >
            <div className={styles.icon}>
              <AiOutlinePlus />
            </div>
            리뷰 작성하기
          </button>
        ) : (
          ""
        )}
      </div>
      <ReviewTable
        fInfo={{ SIGUN_NM: fData.SIGUN_NM, BIZPLC_NM: fData.BIZPLC_NM }}
        data={rData}
      />
      <div className={styles.revSearch}>
        <RevSearchBar searchReview={searchReview} />
        <div className={styles.resetCont} onClick={getAllList}>
          <BsArrowClockwise className={styles.resetIcon} />
        </div>
      </div>
    </div>
  );
};

export default ReviewPg;
