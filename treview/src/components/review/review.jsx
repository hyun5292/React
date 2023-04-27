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
        goReviewWrite: goReviewWrite,
      }}
    />
  );
});

export default Review;
