import React from "react";
import Menu from "../header_menu/header_menu";
import styles from "./header.module.css";

const Header = ({ uData, onLogout }) => {
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src="../images/truck_long.png"
        alt="사이트 로고"
      />
      <Menu uData={uData} onLogout={onLogout} />
    </div>
  );
};

export default Header;
