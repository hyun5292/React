import React, { useRef, useState } from "react";
import styles from "./select.module.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { BsArrowRightShort, BsArrowCounterclockwise } from "react-icons/bs";

const Select = ({ kind, list, setKind }) => {
  const kindRef = useRef();
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

  const handleSelfInput = (event) => {
    event.preventDefault();
    if (kindRef.current.value !== "") {
      setSelected(kindRef.current.value);
      alert("입력되었습니다!");
    } else {
      alert("이메일을 입력해주세요");
      kindRef.current.focus();
    }
  };

  return (
    <div className={styles.select}>
      {selected === "직접입력" ? (
        <div className={styles.self_cont}>
          <input
            ref={kindRef}
            className={styles.self_input}
            type="text"
            placeholder="직접입력"
          />
          <button className={styles.self_btn} onClick={handleSelfInput}>
            <BsArrowRightShort className={styles.icon} />
          </button>
        </div>
      ) : (
        ""
      )}
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
