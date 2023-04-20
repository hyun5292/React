import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import ReviewTable from "../review_table/review_table";
import styles from "./review_list.module.css";

const ReviewList = (props) => {
  const navigate = useNavigate();
  const location = useLocation("");
  const { getReviewList } = useOutletContext();
  const [fData, setFData] = useState([]);
  const [rData, setRData] = useState([]);
  console.log("fData = ", fData);
  console.log("rData = ", rData);

  useEffect(() => {
    if (location.state) {
      setFData(location.state.fData);
      getReviewList(fData).then((result) => setRData(result));
    } else {
      alert("먼저 공장을 선택해주세요!");
      navigate("/search");
    }
  }, [fData, getReviewList, location.state, navigate]);

  return (
    <div className={styles.reviewList}>
      <ReviewTable
        fInfo={{ SIGUN_NM: fData.SIGUN_NM, BIZPLC_NM: fData.BIZPLC_NM }}
        data={rData}
      />
    </div>
  );
};

export default ReviewList;
