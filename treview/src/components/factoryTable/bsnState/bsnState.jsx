import React from "react";
import styles from "./bsnState.module.css";

const BsnState = ({ value }) => {
  return (
    <span
      className={value === "운영중" ? styles.onBsnState : styles.offBsnState}
    >
      {value}
    </span>
  );
};

export default BsnState;
