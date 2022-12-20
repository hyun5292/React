import React from "react";
import styles from "./searchBar.module.css";
import { BsSearch } from "react-icons/bs";

const SearchBar = (props) => {
  return (
    <form action="" className={styles.searchBar}>
      <input type="text" className={styles.schInput} />
      <button className={styles.schBtn}>
        <BsSearch className={styles.icon} />
      </button>
    </form>
  );
};

export default SearchBar;
