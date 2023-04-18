import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Factory = ({ factoryDB }) => {
  const navigate = useNavigate();

  const goSearch = (query) => {
    navigate(`/search`, { state: { query } });
  };

  const getSearchedList = (query) => {
    const data = factoryDB.getSearchedList(query).then((list) => {
      return list;
    });
    console.log(data);
    return data;
  };

  return (
    <div>
      <Outlet
        context={{ goSearch: goSearch, getSearchedList: getSearchedList }}
      />
    </div>
  );
};

export default Factory;
