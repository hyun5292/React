import React from "react";
import SearchBar from "../searchBar/searchBar";
import Table from "../table/table";
import styles from "./searchPg.module.css";
import pgStyle from "../page.module.css";

const SearchPg = ({}) => {
  return (
    <div className={`${styles.searchPg} ${pgStyle.pg}`}>
      <div className={styles.search}>
        <SearchBar />
      </div>
      <Table />
    </div>
  );
};

export default SearchPg;
