import React from "react";
import styles from "./footer.module.css";

const Footer = (props) => (
  <footer className={styles.footer}>
    <div>copyright©2023 sudol5292 All rights reserved</div>
    <div>
      제작자:
      <a href="https://sudol5292.netlify.app/">박수현</a>
    </div>
  </footer>
);

export default Footer;
