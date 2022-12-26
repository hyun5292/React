import React from "react";
import styles from "./mainPg.module.css";
import Search from "../searchBar/searchBar.jsx";
import IntroPg from "../introPg/introPg";
import pgStyle from "../page.module.css";

const MainPg = ({ onSearchBar }) => {
  return (
    <div className={`${styles.mainPg} ${pgStyle.pg}`}>
      <div className={styles.search}>
        <Search onSearchBar={onSearchBar} />
      </div>
      <div className={styles.introPg}>
        <IntroPg />
      </div>
    </div>
  );
};

export default MainPg;
