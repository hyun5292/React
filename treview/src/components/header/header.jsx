import React from "react";
import Menu from "../header_menu/header_menu";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src="./images/truck_long.png"
        alt="사이트 로고"
      />
      <Menu />
    </div>
  );
};

export default Header;
