import React, { useRef, useState } from "react";
import styles from "./factory_search_bar.module.css";
import Select from "../select/select";
import sigun_nm from "../../dataFile/sigun_nm_list.json";
import { BsSearch } from "react-icons/bs";
import { useOutletContext } from "react-router-dom";

const SearchBar = (props) => {
  const fNameRef = useRef();
  const goSearch = useOutletContext();
  const [sigun, setSigun] = useState("");
  const [fName, setFName] = useState("");

  const handleChange = (event) => {
    setFName(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    goSearch({ sigun: sigun, fName: fName });
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.select}>
        <Select
          kind={"시군명"}
          list={sigun_nm["sigun_nm"]}
          setKind={setSigun}
        />
      </div>
      <div className={styles.inputForm}>
        <input
          ref={fNameRef}
          type="text"
          className={styles.search_input}
          onChange={handleChange}
          placeholder="공장명을 입력하세요(필수X)"
        />
        <button className={styles.search_btn} onClick={handleClick}>
          <BsSearch className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
