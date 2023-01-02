import React from "react";
import styles from "./searchNm.module.css";

const SearchNm = ({ value }) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className={styles.bizplcLink}>
      {value}
    </a>
  );
};

export default SearchNm;
