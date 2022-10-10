import React from "react";
import styles from "./title.module.css";

const Title = ({ txtTitle, chkMb }) => {
  console.log(chkMb);
  return (
    <div
      className={
        chkMb ? `${styles.title}` : `${styles.title} ${styles.bottom_none}`
      }
    >
      {txtTitle}
    </div>
  );
};

Title.defaultProps = {
  txtTitle: "",
  chkMb: false,
};

export default Title;
