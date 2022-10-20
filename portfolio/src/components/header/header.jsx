import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styles from "./header.module.css";
import Navbar from "./navbar/navbar";

const Header = (props) => {
  const headerRef = useRef();
  const [headerClass, setHeaderClass] = useState(`${styles.header}`);

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 500);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 64) {
      setHeaderClass(`${styles.header} ${styles.fixed}`);
    } else {
      setHeaderClass(`${styles.header}`);
    }
  };

  return (
    <header ref={headerRef} className={headerClass}>
      <div className={styles.logo}>
        <span className={styles.mainLogo}>SUDOL</span>
        <span className={styles.mainLogo_info}>Portfolio</span>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
