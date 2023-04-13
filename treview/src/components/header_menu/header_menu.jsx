import React from "react";
import styles from "./header_menu.module.css";
import {
  BsInfoCircle,
  BsSearch,
  BsPen,
  BsPerson,
  BsPersonPlus,
} from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { FaUserEdit } from "react-icons/fa";

const HeaderMenu = (props) => {
  return (
    <ul className={styles.menu}>
      <li className={styles.navItem}>
        <a href="/">
          <BsInfoCircle className={styles.icon} />
          사이트 소개
          <span className={styles.navCircle} />
        </a>
      </li>
      <li className={styles.navItem}>
        <a href="/search">
          <BsSearch className={styles.icon} />
          검색
          <span className={styles.navCircle} />
        </a>
      </li>
      <li className={styles.navItem}>
        <a href="/review/list">
          <BsPen className={styles.icon} />
          리뷰
          <span className={styles.navCircle} />
        </a>
      </li>
      <span className={styles.bar} />
      <li className={styles.navItem}>
        <a href="/user/login">
          <BsPerson className={styles.icon} />
          로그인
          <span className={`${styles.navCircle} ${styles.userBar}`} />
        </a>
      </li>
      <li className={styles.navItem}>
        <a href="/user/join">
          <BsPersonPlus className={styles.icon} />
          회원가입
          <span className={`${styles.navCircle} ${styles.userBar}`} />
        </a>
      </li>
    </ul>
  );
};

export default HeaderMenu;
