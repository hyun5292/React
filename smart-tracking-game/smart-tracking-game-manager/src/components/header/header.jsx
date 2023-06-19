import React from "react";
import styles from "./header.module.css";
import { FaHome } from "react-icons/fa";

const Header = (props) => (
  <header className={styles.header}>
    <button className={styles.home_btn}>
      <FaHome />
    </button>
    <div className={styles.text_top}>양주시 청소년 수련원</div>
    <div className={styles.text_bottom}>스마트한 추적 놀이</div>
  </header>
);

export default Header;
