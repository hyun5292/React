import React, { useState } from "react";
import styles from "./select.module.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Select = ({ kindText, ulList, setClicked }) => {
  const [selectChk, setSelectChk] = useState(false);
  const [kind, setKind] = useState("");

  const onItemClick = (sg) => {
    setSelectChk(false);
    setKind(sg);
    setClicked(sg);
  };

  return (
    <div className={styles.select}>
      <div
        className={styles.selectBtn}
        onClick={() => {
          const newResult = !selectChk;
          setSelectChk(newResult);
        }}
      >
        {kind ? kind : kindText}
        <div className={styles.icon}>
          {selectChk ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </div>
      </div>
      <ul className={selectChk ? styles.ulCont : styles.gone}>
        {ulList &&
          ulList.map((liItem) => {
            return (
              <li
                key={ulList.indexOf(liItem)}
                className={styles.liItem}
                onClick={() => onItemClick(liItem)}
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
