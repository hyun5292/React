import React from "react";
import styles from "./mainPg.module.css";
import Search from "../facSearchBar/facSearchBar.jsx";
import IntroPg from "../introPg/introPg";
import pgStyle from "../../css/page.module.css";

const MainPg = ({}) => {
  return (
    <div className={`${styles.mainPg} ${pgStyle.pg}`}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.introPg}>
        <IntroPg />
      </div>
    </div>
  );
};

export default MainPg;
