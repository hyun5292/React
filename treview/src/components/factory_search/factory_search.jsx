import React, { useEffect, useState } from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import styles from "./factory_search.module.css";

const FactorySearch = (props) => {
  const location = useLocation("");
  const { getSearchedList } = useOutletContext();
  const [data, setData] = useState([]);
  const { sigun, fName } = location.state.query;

  useEffect(() => {
    setData(getSearchedList({ sigun: sigun, fName: fName }));
  }, []);

  return <div className={styles.factorySearch}></div>;
};

export default FactorySearch;
