import React from "react";
import SearchBar from "../searchBar/searchBar";
import styles from "./searchPg.module.css";
import pgStyle from "../page.module.css";

const SearchPg = ({ onSearchBar, searchF }) => {
  const FList = searchF;

  return (
    <div className={`${styles.searchPg} ${pgStyle.pg}`}>
      <div className={styles.search}>
        <SearchBar onSearchBar={onSearchBar} />
      </div>
      {searchF &&
        FList.map((list) => {
          return <div>{list.BIZPLC_NM}</div>;
        })}
    </div>
  );
};

export default SearchPg;
