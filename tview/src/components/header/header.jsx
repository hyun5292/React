import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <span className={styles.logo}>로고자리</span>
      <ul className={styles.nav}>
        <li className={styles.navItem}>사이트 소개</li>
        <li className={styles.navItem}>검색</li>
        <li className={styles.navItem}>리뷰</li>
        <li className={styles.navItem}>로그인</li>
      </ul>
    </div>
  );
};

export default Header;
