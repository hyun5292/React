import React, { useState } from "react";
import styles from "./header.module.css";
import {
  AiFillCloseCircle,
  AiFillInfoCircle,
  AiFillLeftCircle,
  AiFillRightCircle,
} from "react-icons/ai";

const Header = ({
  menu,
  stepId,
  stepTitle,
  kinds,
  dataL,
  handlePrNeStep,
  handleNavbar,
}) => {
  const onOffNavbar = () => {
    handleNavbar();
  };

  const onPrevNextStep = (kind) => {
    console.log("ok");
  };

  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <img
          className={styles.logo}
          src="./assets/siren.png"
          alt="사이트 로고"
        />
        {menu ? (
          <button className={styles.hideMenu} onClick={onOffNavbar}>
            <AiFillCloseCircle
              className={`${styles.icon} ${styles.closeIcon}`}
            />
            <span>메뉴 숨기기</span>
          </button>
        ) : (
          <button className={styles.hideMenu} onClick={onOffNavbar}>
            <AiFillInfoCircle className={`${styles.icon} ${styles.infoIcon}`} />
            <span>메뉴 펼치기</span>
          </button>
        )}
      </div>
      <div className={styles.cont}>
        <button className={styles.prev} onClick={() => onPrevNextStep("prev")}>
          <AiFillLeftCircle className={`${styles.icon} ${styles.beforeIcon}`} />
          <span>이전 영상</span>
        </button>
        <span className={styles.title}>
          #{stepId} {stepTitle}
        </span>
        <button className={styles.next} onClick={() => onPrevNextStep("next")}>
          <span>다음 영상</span>
          <AiFillRightCircle className={`${styles.icon} ${styles.afterIcon}`} />
        </button>
      </div>
    </div>
  );
};

export default Header;
