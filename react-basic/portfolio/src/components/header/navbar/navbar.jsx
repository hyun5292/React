import React from "react";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <ul className={styles.nav}>
      <li className={styles.nav_list}>
        <a href="/" className={`${changeColor("")}`}>
          Welcome
        </a>
      </li>
      <li className={styles.nav_list}>
        <a href="/skills" className={`${changeColor("skills")}`}>
          Skills
        </a>
      </li>
      <li className={styles.nav_list}>
        <a href="/projects" className={`${changeColor("projects")}`}>
          Projects
        </a>
      </li>
    </ul>
  );
};

function changeColor(kind) {
  const url = window.location.href.split("/");
  const thisPage = url[url.length - 1];

  if (kind === thisPage) {
    return styles.nowPage;
  } else {
    return styles.otherPage;
  }
}

export default Navbar;
