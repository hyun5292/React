import React, { useState } from "react";
import styles from "./facSearchBar.module.css";
import sigun_nm from "../../service/sigun_nm_list.json";
import Select from "../select/select";
import { BsSearch } from "react-icons/bs";

const FSearchBar = ({ getSchList }) => {
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
    getSchList({ sigun, fName });
    setSigun("");
    setFName("");
    document.getElementById("inputFName").value = "";
  };

  return (
    <div className={styles.search}>
      <div className={styles.selectForm}>
        <div className={styles.select}>
          <Select
            kindText="시군명"
            ulList={sigun_nm.sigun_nm}
            setClicked={onSigunClick}
          />
        </div>
      </div>
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
