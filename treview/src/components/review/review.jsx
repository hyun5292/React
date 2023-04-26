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

  return (
    <Outlet
      context={{
        getReviewList: getReviewList,
        getSearchReview: getSearchReview,
      }}
    />
  );
});

export default Review;
