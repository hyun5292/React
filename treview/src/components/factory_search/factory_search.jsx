import React, { useEffect, useState } from "react";
import FSearchBar from "../factory_search_bar/factory_search_bar";
import FactoryTable from "../factory_table/factory_table";
import { useLocation, useOutletContext } from "react-router-dom";
import styles from "./factory_search.module.css";
import { BsArrowClockwise } from "react-icons/bs";

const FactorySearch = (props) => {
  const location = useLocation("");
  const { goReview, getSearchedList, getAllList } = useOutletContext();
  const [data, setData] = useState([]);

  const handleReset = (event) => {
    event.preventDefault();
    getAllList().then((result) => setData(result));
  };

  useEffect(() => {
    location.state
      ? getSearchedList({
          sigun: location.state.query.sigun,
          fName: location.state.query.fName,
        }).then((result) => setData(result))
      : getAllList().then((result) => setData(result));
  }, [getAllList, getSearchedList, location.state]);

  return (
    <div className={styles.factorySearch}>
      <div className={styles.searchBar}>
        <FSearchBar />
        <button className={styles.resetCont} onClick={handleReset}>
          <BsArrowClockwise className={styles.resetIcon} />
        </button>
      </div>
      <FactoryTable data={data} goReview={goReview} />
    </div>
  );
};

export default FactorySearch;
