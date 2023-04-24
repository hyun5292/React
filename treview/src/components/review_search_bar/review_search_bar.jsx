import React, { useRef } from "react";
import styles from "./review_search_bar.module.css";
import { BsSearch } from "react-icons/bs";

const RSearchBar = ({ searchReview }) => {
  const keywordRef = useRef();

  const handleClick = (event) => {
    event.preventDefault();
    searchReview(keywordRef.current.value);
  };

  return (
    <div className={styles.rSearchBar}>
      <input
        ref={keywordRef}
        className={styles.rSchInput}
        type="text"
        placeholder="내용을 입력해주세요"
      />
      <button className={styles.rSchBtn} onClick={handleClick}>
        <BsSearch />
      </button>
    </div>
  );
};

export default RSearchBar;
