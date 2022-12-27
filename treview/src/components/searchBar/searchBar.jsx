import React, { useState } from "react";
import styles from "./searchBar.module.css";
import sigun_nm from "../../service/sigun_nm_list.json";
import { BsSearch } from "react-icons/bs";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const SearchBar = ({ onSearchBar }) => {
  const [selectChk, setSelectChk] = useState(false);
  const [sigun, setSigun] = useState("");
  const [fName, setFName] = useState("");

  const onSigunClick = (sg) => {
    setSelectChk(false);
    setSigun(sg);
  };

  const onInputChange = (event) => {
    setFName(event.target.value);
  };

  const handleSetSearch = () => {
    if (!sigun) {
      alert("시군명을 선택해주세요");
      return;
    }
    onSearchBar({ sigun, fName });
    setSigun("");
    setFName("");
    document.getElementById("inputFName").value = "";
  };

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
          {sigun ? sigun : "시군명"}
          {selectChk ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </button>
        <ul className={selectChk ? styles.schOption : styles.gone}>
          {sigun_nm &&
            sigun_nm.sigun_nm.map((sigun) => {
              return (
                <li
                  key={sigun_nm.sigun_nm.indexOf(sigun)}
                  className={styles.schOption_item}
                  onClick={() => onSigunClick({ sigun }.sigun)}
                  value={sigun}
                >
                  {sigun}
                </li>
              );
            })}
        </ul>
      </section>
      <div className={styles.searchBar}>
        <input
          id="inputFName"
          type="text"
          className={styles.schInput}
          onChange={onInputChange}
          placeholder="공장명을 입력하세요(필수X)"
        />
        <button className={styles.schBtn} onClick={handleSetSearch}>
          <BsSearch className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
