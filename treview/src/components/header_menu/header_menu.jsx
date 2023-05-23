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

const HeaderMenu = ({ uData, onLogout }) => {
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
        <a href="/review">
          <BsPen className={styles.icon} />
          리뷰
          <span className={styles.navCircle} />
        </a>
      </li>
      <span className={styles.bar} />
      {uData.uId ? (
        <li className={styles.mState}>
          <span style={{ paddingTop: "0.5px" }}>{uData.uId}님</span>
          <div className={styles.mState_btn}>
            <button className={styles.user_edit_btn}>
              <a href="/user/edit">
                <FaUserEdit className={styles.icon} />
              </a>
              <div className={styles.gone}>정보수정</div>
            </button>
            <button className={styles.logout_btn} onClick={onLogout}>
              <FiLogOut className={styles.icon} />
              <div className={styles.gone}>로그아웃</div>
            </button>
          </div>
        </li>
      ) : (
        <>
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
        </>
      )}
    </ul>
  );
};

export default HeaderMenu;
