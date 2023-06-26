import React from "react";
import styles from "./footer.module.scss";

const Footer = (props) => (
  <footer className={styles.footer}>
    <div>copyright©2023 sudol5292 All rights reserved</div>
    <div className={styles.maker}>
      제작자:
      <a className={styles.maker_link} href="https://sudol5292.netlify.app/">
        박수현
      </a>
    </div>
  </footer>
);

export default Footer;
