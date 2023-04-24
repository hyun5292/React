import React from "react";
import styles from "./footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.fText}>
        copyright&copy;2023 sudol5292 All rights reserved
      </div>
      <div className={styles.fText}>
        <span>제작자: </span>
        <a className={styles.maker} href="https://sudol5292.netlify.app/">
          박수현
        </a>
        &nbsp;&nbsp;
        <span>사용 폰트: SUIT-수트</span>
      </div>
    </div>
  );
};

export default Footer;
