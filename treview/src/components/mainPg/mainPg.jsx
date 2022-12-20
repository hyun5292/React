import React from "react";
import styles from "./mainPg.module.css";
import Search from "../searchBar/searchBar.jsx";

const MainPg = (props) => {
  return (
    <div className={styles.mainPg}>
      <Search className={styles.search} />
    </div>
  );
};

export default MainPg;
