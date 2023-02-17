import React, { useEffect, useState } from "react";
import SearchBar from "../facSearchBar/facSearchBar";
import Table from "../factoryTable/factoryTable";
import styles from "./searchPg.module.css";
import pgStyle from "../../css/page.module.css";
import { useLocation } from "react-router-dom";

const SearchPg = ({ factoryDB }) => {
  const location = useLocation("");
  const [data, setData] = useState([]);

  const getSearchList = (query) => {
    factoryDB.getSearchedList(query).then((list) => setData(list));
  };

  useEffect(() => {
    location.state != null
      ? factoryDB
          .getSearchedList(location.state.query)
          .then((list) => setData(list))
      : factoryDB.getAllList().then((dataList) => setData(dataList));
  }, [factoryDB, location.state]);

  return (
    <div className={`${styles.searchPg} ${pgStyle.pg} ${pgStyle.pgMargin}`}>
      <div className={styles.search}>
        <SearchBar getSchList={getSearchList} />
      </div>
      <Table data={data} />
    </div>
  );
};

export default SearchPg;
