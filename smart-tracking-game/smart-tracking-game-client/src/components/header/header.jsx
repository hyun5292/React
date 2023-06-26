import React from "react";
import styles from "./header.module.scss";
import { FaHome, FaMapMarkedAlt } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Header = (props) => {
  const naviage = useNavigate();

  const goToPage = (event, pgLink) => {
    event.preventDefault();
    naviage(pgLink);
  };

  return (
    <header className={styles.header}>
      <button
        className={styles.home_btn}
        onClick={(event) => goToPage(event, "/")}
      >
        <FaHome />
      </button>
      <div className={styles.text_top}>양주시 청소년 수련원</div>
      <div className={styles.text_bottom}>스마트한 추적 놀이</div>
      <button
        className={styles.map_btn}
        onClick={(event) => goToPage(event, "/map")}
      >
        <FaMapMarkedAlt />
      </button>
    </header>
  );
};

export default Header;
