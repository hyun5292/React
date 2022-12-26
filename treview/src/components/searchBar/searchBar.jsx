import React, { useState } from "react";
import styles from "./searchBar.module.css";
import sigun_nm from "../../service/sigun_nm_list.json";
import { BsSearch } from "react-icons/bs";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const SearchBar = (props) => {
  const [selectChk, setSelectChk] = useState(false);

  return (
    <div className={styles.search}>
      <section className={styles.schSelect}>
        <button
          className={styles.selectBtn}
          onClick={() => {
            const newResult = !selectChk;
            setSelectChk(newResult);
          }}
        >
          시군명
          {selectChk ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </button>
        <ul className={selectChk ? styles.schOption : styles.gone}>
          {sigun_nm &&
            sigun_nm.sigum_nm.map((sigun) => {
              return (
                <li className={styles.schOption_item} value={sigun}>
                  {sigun}
                </li>
              );
            })}
        </ul>
      </section>
      <div className={styles.searchBar}>
        <input type="text" className={styles.schInput} />
        <button className={styles.schBtn}>
          <BsSearch className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
