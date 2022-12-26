import React from "react";
import SearchBar from "../searchBar/searchBar";
import styles from "./searchPg.module.css";
import pgStyle from "../page.module.css";

const SearchPg = ({ onSearchBar }) => {
  return (
    <div className={`${styles.searchPg} ${pgStyle.pg}`}>
      <div className={styles.search}>
        <SearchBar onSearchBar={onSearchBar} />
      </div>
    </div>
  );
};

export default SearchPg;
