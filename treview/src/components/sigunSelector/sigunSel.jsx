import React, { useState } from "react";
import sigun_nm from "../../service/sigun_nm_list.json";
import styles from "./sigunSel.module.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const SigunSel = ({ handleClick }) => {
  const [selectChk, setSelectChk] = useState(false);
  const [sigun, setSigun] = useState("");

  const onSigunClick = (sg) => {
    setSelectChk(false);
    setSigun(sg);
    handleClick(sg);
  };

  return (
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
  );
};

export default SigunSel;
