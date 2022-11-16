import React from "react";
import styles from "./header.module.css";
import {
  AiFillCloseCircle,
  AiFillInfoCircle,
  AiFillLeftCircle,
  AiFillRightCircle,
} from "react-icons/ai";
import { useState } from "react";

const Header = (props) => {
  const [menu, setMenu] = useState(true);

  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <img className={styles.logo} src="" alt="사이트 로고" />
        {menu ? (
          <button className={styles.hideMenu}>
            <AiFillCloseCircle
              className={`${styles.icon} ${styles.closeIcon}`}
            />
            <span>메뉴 숨기기</span>
          </button>
        ) : (
          <button className={styles.hideMenu}>
            <AiFillInfoCircle className={`${styles.icon} ${styles.infoIcon}`} />
            <span>메뉴 펼치기</span>
          </button>
        )}
      </div>
      <div className={styles.cont}>
        <button className={styles.prev}>
          <AiFillLeftCircle className={`${styles.icon} ${styles.beforeIcon}`} />
          <span>이전 영상</span>
        </button>
        <button className={styles.next}>
          <span>다음 영상</span>
          <AiFillRightCircle className={`${styles.icon} ${styles.afterIcon}`} />
        </button>
      </div>
    </div>
  );
};

export default Header;
