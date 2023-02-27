import React from "react";
import styles from "./footer.module.css";

const Footer = (props) => (
  <div className={styles.footer}>
    <div className={styles.fText}>@copyright 뭐시기</div>
    <div className={styles.fText}>제작자 뭐시기</div>
  </div>
);

export default Footer;
