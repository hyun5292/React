import React from "react";
import SearchBar from "../facSearchBar/facSearchBar";
import Table from "../factoryTable/factoryTable";
import styles from "./searchPg.module.css";
import pgStyle from "../../css/page.module.css";

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
