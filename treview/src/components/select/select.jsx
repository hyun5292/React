import React, { useState } from "react";
import styles from "./select.module.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Select = ({ kindText, ulList, setClicked }) => {
  const [selectChk, setSelectChk] = useState(false);
  const [sigun, setSigun] = useState("");

  const onSigunClick = (sg) => {
    setSelectChk(false);
    setSigun(sg);
    setClicked(sg);
  };

  return (
    <div className={styles.select}>
      <button
        className={styles.selectBtn}
        onClick={() => {
          const newResult = !selectChk;
          setSelectChk(newResult);
        }}
      >
        {sigun ? sigun : kindText}
        {selectChk ? <AiFillCaretUp /> : <AiFillCaretDown />}
      </button>
      <ul className={selectChk ? styles.ulCont : styles.gone}>
        {ulList &&
          ulList.map((liItem) => {
            return (
              <li
                key={ulList.indexOf(liItem)}
                className={styles.liItem}
                onClick={() => onSigunClick(liItem)}
                value={liItem}
              >
                {liItem}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Select;
