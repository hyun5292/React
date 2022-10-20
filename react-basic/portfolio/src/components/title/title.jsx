import React from "react";
import styles from "./title.module.css";

const Title = ({ txtTitle, txtColor }) => {
  return (
    <div className={`${styles.title} ${setColor(txtColor)}`}>{txtTitle}</div>
  );
};

function setColor(color) {
  switch (color) {
    case "green":
      return styles.green;
    case "grey":
      return styles.grey;
    default:
      return new Error(`unknown theme: ${color}`);
  }
}

export default Title;
