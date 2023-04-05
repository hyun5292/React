import React, { useRef } from "react";
import styles from "./revSearchBar.module.css";
import { BsSearch } from "react-icons/bs";

const RevSearchBar = ({ searchReview }) => {
  const keywordRef = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    searchReview(event, keywordRef.current.value);
  };

  return (
    <form action="#" className={styles.revSchPg}>
      <input
        ref={keywordRef}
        className={styles.rSchInput}
        type="text"
        placeholder="내용을 입력해주세요"
      />
      <button className={styles.rSchBtn} onClick={handleSearch}>
        <BsSearch />
      </button>
    </form>
  );
};

export default RevSearchBar;
