import React from "react";
import styles from "./reset_btn.module.css";
import { BsArrowClockwise } from "react-icons/bs";

const ResetBtn = ({ onReset }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onReset();
  };

  return (
    <button className={styles.resetCont} onClick={handleClick}>
      <BsArrowClockwise className={styles.resetIcon} />
    </button>
  );
};

export default ResetBtn;
