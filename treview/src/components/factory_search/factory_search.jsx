import React, { useEffect, useState } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import FSearchBar from "../factory_search_bar/factory_search_bar";
import ResetBtn from "../reset_btn/reset_btn";
import FactoryTable from "../factory_table/factory_table";
import styles from "./factory_search.module.css";

const FactorySearch = (props) => {
  const location = useLocation("");
  const { goReview, getSearchedList, getAllList } = useOutletContext();
  const [data, setData] = useState([]);

  const handleReset = () => {
    getAllList().then((result) => setData(result));
  };

  useEffect(() => {
    location.state
      ? getSearchedList({
          sigun: location.state.query.sigun,
          fName: location.state.query.fName,
        }).then((result) => result && setData(result))
      : getAllList().then((result) => result && setData(result));
  }, [getAllList, getSearchedList, location.state]);

  return (
    <div className={styles.factorySearch}>
      <div className={styles.searchBar}>
        <FSearchBar />
        <ResetBtn onReset={handleReset} />
      </div>
      <FactoryTable data={data} goReview={goReview} />
    </div>
  );
};

export default FactorySearch;
