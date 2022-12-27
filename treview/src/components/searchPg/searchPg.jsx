import React, { useEffect, useState } from "react";
import SearchBar from "../searchBar/searchBar";
import styles from "./searchPg.module.css";
import pgStyle from "../page.module.css";

const SearchPg = ({ onSearchBar, allList, searchF }) => {
  const [loading, setLoading] = useState(false);
  console.log(loading);
  const all = allList;
  const FList = searchF;

  useEffect(() => {
    setLoading(true);
    setTimeout(function () {
      setLoading(false);
    }, 1000);
  }, [allList, searchF]);

  return (
    <div className={`${styles.searchPg} ${pgStyle.pg}`}>
      <div className={styles.search}>
        <SearchBar onSearchBar={onSearchBar} />
      </div>
      {FList === [] ? (
        <ul>
          {searchF &&
            FList.map((list) => {
              return <li>{list.BIZPLC_NM}</li>;
            })}
        </ul>
      ) : (
        <ul>
          {allList &&
            all.map((list) => {
              return (
                list &&
                list.map((item) => {
                  return (
                    <li>
                      {item.SIGUN_NM} &nbsp;
                      {item.BIZPLC_NM}
                    </li>
                  );
                })
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default SearchPg;
