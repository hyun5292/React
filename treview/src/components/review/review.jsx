import React, { memo } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Review = memo(({ uData, reviewDB }) => {
  const navigate = useNavigate();

  const getReviewList = (fData) => {
    return reviewDB.getReviewList(fData).then((result) => {
      return result;
    });
  };

  const getSearchReview = (fData, keyword) => {
    return reviewDB.searchReview(fData, keyword).then((result) => {
      return result;
    });
  };

  const doWriteReview = (newData, fData) => {
    reviewDB.writeReview(newData, fData).then((result) => {
      if (result) {
        navigate("/review", {
          state: {
            fData: { SIGUN_NM: fData.SIGUN_NM, BIZPLC_NM: fData.BIZPLC_NM },
          },
        });
      }
    });
  };

  const goReviewWrite = (uData, fData) => {
    navigate(`/review/write`, {
      state: {
        uData: uData,
        fData: fData,
      },
    });
  };

  return (
    <Outlet
      context={{
        uData: uData,
        getReviewList: getReviewList,
        getSearchReview: getSearchReview,
        doWriteReview: doWriteReview,
        goReviewWrite: goReviewWrite,
      }}
    />
  );
});

export default Review;
