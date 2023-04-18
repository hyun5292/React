import React, { useState } from "react";
import styles from "./select.module.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { BsArrowRightShort, BsArrowCounterclockwise } from "react-icons/bs";

const Select = ({ kind, list, setKind }) => {
  const [selected, setSelected] = useState("");
  const [listState, setListState] = useState(false);

  const handleClick = (item) => {
    setSelected(item);
    setKind(item);
    setListState(false);
  };

  const openSelect = (event) => {
    event.preventDefault();
    const newState = !listState;
    setListState(newState);
  };

  return (
    <div className={styles.select}>
      <button className={styles.select_btn} onClick={openSelect}>
        {selected ? selected : kind}
        {listState ? (
          <AiFillCaretUp className={styles.icon} />
        ) : (
          <AiFillCaretDown className={styles.icon} />
        )}
      </button>
      <ul className={listState ? styles.list_cont : styles.gone}>
        {list.map((item) => {
          return (
            <li
              key={list.indexOf(item)}
              className={styles.list_item}
              onClick={() => handleClick(item)}
              value={item}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
