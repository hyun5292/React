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

  const doEditReview = (newData) => {
    reviewDB.modifyReview(newData).then((result) => {
      if (result) {
        navigate("/review", {
          state: {
            fData: { SIGUN_NM: newData.SIGUN_NM, BIZPLC_NM: newData.BIZPLC_NM },
          },
        });
      }
    });
  };

  const doDeleteReview = (rData) => {
    if (window.confirm("삭제하시겠습니까?")) {
      reviewDB.removeReview(rData).then((result) => {
        if (result) {
          navigate("/review", {
            state: {
              fData: { SIGUN_NM: rData.SIGUN_NM, BIZPLC_NM: rData.BIZPLC_NM },
            },
          });
        }
      });
    }
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
        doEditReview: doEditReview,
        doDeleteReview: doDeleteReview,
        goReviewWrite: goReviewWrite,
      }}
    />
  );
});

export default Review;
