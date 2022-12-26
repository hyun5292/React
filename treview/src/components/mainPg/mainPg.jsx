import React from "react";
import styles from "./mainPg.module.css";
import Search from "../searchBar/searchBar.jsx";

const MainPg = ({ onSearchBar }) => {
  return (
    <div className={styles.mainPg}>
      <div className={styles.search}>
        <Search onSearchBar={onSearchBar} />
      </div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
      <div>o</div>
    </div>
  );
};

export default MainPg;
