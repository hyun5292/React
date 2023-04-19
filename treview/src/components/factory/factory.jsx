import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Factory = ({ factoryDB }) => {
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

  // const getSearchedList = (query) => {
  //   const data = factoryDB.getSearchedList(query).then((list) => {
  //     return list;
  //   });
  //   console.log(data);
  //   return data;
  // };

  return (
    <div>
      <Outlet
        context={{
          goSearch: goSearch,
          getSearchedList: getSearchedList,
          getAllList: getAllList,
        }}
      />
    </div>
  );
};

export default Factory;
