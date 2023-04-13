import React, { useEffect, useRef, useState } from "react";
import styles from "./select.module.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { BsArrowRightShort, BsArrowCounterclockwise } from "react-icons/bs";

const Select = ({ kindText, ulList, setClicked }) => {
  const kindRef = useRef();
  const [kind, setKind] = useState("");
  const [selectChk, setSelectChk] = useState(false);
  const [writeChk, setWriteChk] = useState(false);

  const onItemClick = (sg) => {
    setSelectChk(false);
    setKind(sg);
    setClicked(sg);
  };

  const onWriteKind = () => {
    const eKind = kindRef.current.value;
    setKind(eKind);
    setWriteChk(true);
    alert("입력되었습니다!");
  };

  useEffect(() => {
    if (kind !== "직접입력") {
      setKind(kind);
    }
  }, [kind]);

  return (
    <div className={styles.select}>
      {kind === "직접입력" ? (
        <div className={styles.inputCont}>
          <input ref={kindRef} className={styles.inputKind} type="text" />
          <button
            className={writeChk ? styles.KindChked : styles.KindNotChked}
            onClick={onWriteKind}
          >
            {writeChk ? <BsArrowCounterclockwise /> : <BsArrowRightShort />}
          </button>
        </div>
      ) : (
        ""
      )}
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
