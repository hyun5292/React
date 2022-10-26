import React from "react";
import styles from "./title.module.css";

const Title = ({ txtTitle, txtSub, txtColor }) => {
  return (
    <>
      <div className={`${styles.title} ${setTitleColor(txtColor)}`}>
        {txtTitle}
      </div>
      <p className={`${styles.sub} ${setSubColor(txtColor)}`}>{txtSub}</p>
    </>
  );
};

function setTitleColor(color) {
  switch (color) {
    case "welcome":
      return styles.greenTitle;
    case "skills":
      return styles.grey;
    case "projects":
      return styles.whiteTitle;
    default:
      return new Error(`unknown theme: ${color}`);
  }
}

function setSubColor(color) {
  switch (color) {
    case "welcome":
      return styles.whiteSub;
    case "skills":
      return styles.grey;
    case "projects":
      return styles.whiteSub;
    default:
      return new Error(`unknown theme: ${color}`);
  }
}

export default Title;
