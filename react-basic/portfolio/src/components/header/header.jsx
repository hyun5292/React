import React from "react";
import styles from "./header.module.css";
import Navbar from "./navbar/navbar";

const Header = (props) => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <span className={styles.mainLogo}>SUDOL</span>
      <span className={styles.mainLogo_info}>Portfolio</span>
    </div>
    <Navbar />
  </header>
);

export default Header;
