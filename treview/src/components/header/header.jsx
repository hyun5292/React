import React, { useState } from "react";
import Menu from "../header_menu/header_menu";
import styles from "./header.module.css";

const Header = ({ uData, onLogout }) => {
  const [onMenu, setOnMenu] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    const newResult = !onMenu;
    setOnMenu(newResult);
  };

  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src="../images/truck_long.png"
        alt="사이트 로고"
      />
      <div
        className={onMenu ? styles.hamburger : styles.hamburger_off}
        onClick={handleClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={`${styles.menu} ${
          onMenu ? styles.menu_on : styles.menu_off
        }`}
      >
        <Menu uData={uData} onLogout={onLogout} />
      </div>
    </div>
  );
};

export default Header;
