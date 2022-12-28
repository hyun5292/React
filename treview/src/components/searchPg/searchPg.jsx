import React, { useEffect, useState } from "react";
import SearchBar from "../searchBar/searchBar";
import styles from "./searchPg.module.css";
import pgStyle from "../page.module.css";

const SearchPg = ({}) => {
  return (
    <div className={`${styles.searchPg} ${pgStyle.pg}`}>
      <div className={styles.search}>
        <SearchBar />
      </div>
    </div>
  );
};

export default SearchPg;
