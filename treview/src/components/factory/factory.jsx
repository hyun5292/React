import React, { memo } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Factory = memo(({ factoryDB }) => {
  const navigate = useNavigate();

  const getSearchedList = (query) => {
    return factoryDB.getSearchedList(query).then((list) => {
      return list;
    });
  };

  const getAllList = () => {
    return factoryDB.getAllList().then((dataList) => {
      return dataList;
    });
  };

  const goSearch = (query) => {
    navigate(`/search`, { state: { query } });
  };

  const goReview = (fData) => {
    navigate(`/review`, {
      state: { fData: fData },
    });
  };

  return (
    <Outlet
      context={{
        goReview: goReview,
        goSearch: goSearch,
        getSearchedList: getSearchedList,
        getAllList: getAllList,
      }}
    />
  );
});

export default Factory;
