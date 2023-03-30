import React, { useEffect, useState } from "react";
import ReviewTable from "../reviewTable/reviewTable";
import styles from "./reviewPg.module.css";
import pgStyle from "../../css/page.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

const ReviewPg = ({ uId, revService }) => {
  const navigate = useNavigate();

  const location = useLocation("");
  const [fData, setFData] = useState([]);
  const [rData, setRData] = useState([]);

  useEffect(() => {
    if (location.state) {
      setFData(location.state.fData);
      revService.getReview(fData).then((result) => {
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
              navigate(`/writeReview`, { state: { fData: fData } })
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
      <ReviewTable data={rData} />
    </div>
  );
};

export default ReviewPg;
