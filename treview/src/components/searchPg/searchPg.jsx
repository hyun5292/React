import React, { useEffect, useState } from "react";
import SearchBar from "../facSearchBar/facSearchBar";
import Table from "../factoryTable/factoryTable";
import styles from "./searchPg.module.css";
import pgStyle from "../../css/page.module.css";

const SearchPg = ({ factoryDB }) => {
  const [data, setData] = useState([]);

  const getSearchList = (query) => {
    factoryDB.getSearchedList(query).then((list) => setData(list));
  };

  useEffect(() => {
    factoryDB.getAllList().then((dataList) => setData(dataList));
  }, [factoryDB]);

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
