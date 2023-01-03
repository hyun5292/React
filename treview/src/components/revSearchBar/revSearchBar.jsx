import React from "react";
import styles from "./revSearchBar.module.css";
import { BsSearch } from "react-icons/bs";

const RevSearchBar = (props) => {
  return (
    <form action="#" className={styles.revSchPg}>
      <input
        className={styles.rSchInput}
        type="text"
        placeholder="내용을 입력해주세요"
      />
      <button className={styles.rSchBtn}>
        <BsSearch />
      </button>
    </form>
  );
};

export default RevSearchBar;
