import React, { useState } from "react";
import styles from "./facSearchBar.module.css";
// import sigun_nm from "../../service/sigun_nm_list.json";
import { BsSearch } from "react-icons/bs";
import SigunSel from "../sigunSelector/sigunSel";

const FSearchBar = ({}) => {
  const [sigun, setSigun] = useState("");
  const [fName, setFName] = useState("");

  const onSigunClick = (sg) => {
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
    // onSearchBar({ sigun, fName });
    setSigun("");
    setFName("");
    document.getElementById("inputFName").value = "";
  };

  return (
    <div className={styles.search}>
      <SigunSel handleClick={onSigunClick} />
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

export default FSearchBar;
