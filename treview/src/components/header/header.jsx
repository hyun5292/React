import React from "react";
import styles from "./header.module.css";
import { BsInfoCircle, BsSearch, BsPen, BsPerson } from "react-icons/bs";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src="./assets/truck_long.png"
        alt="사이트 세로버전 로고"
      />
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <a href="/" className={styles.navCont}>
            <BsInfoCircle className={styles.icon} />
            사이트 소개
            <span className={styles.navCircle} />
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/search" className={styles.navCont}>
            <BsSearch className={styles.icon} />
            검색
            <span className={styles.navCircle} />
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="/review" className={styles.navCont}>
            <BsPen className={styles.icon} />
            리뷰
            <span className={styles.navCircle} />
          </a>
        </li>
        <span className={styles.bar} />
        <li className={styles.navItem}>
          <a href="/login" className={styles.navCont}>
            <BsPerson className={styles.icon} />
            로그인
            <span className={`${styles.navCircle} ${styles.loginBar}`} />
          </a>
        </li>
      </ul>
      <ul className={styles.hamburger}>
        <li className={styles.hamBar}></li>
        <li className={styles.hamBar}></li>
        <li className={styles.hamBar}></li>
      </ul>
    </div>
  );
};

export default Header;
