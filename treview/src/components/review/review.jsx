import React, { memo } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Review = memo(({ reviewDB }) => {
  const navigate = useNavigate();

  const getReviewList = (fData) => {
    return reviewDB.getReviewList(fData).then((result) => {
      if (result) return result;
    });
  };

  return <Outlet context={{ getReviewList: getReviewList }} />;
});

export default Review;
