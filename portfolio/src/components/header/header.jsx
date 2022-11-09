import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styles from "./header.module.css";
import Navbar from "./navbar/navbar";

const Header = (props) => {
  const headerRef = useRef();
  const [headerClass, setHeaderClass] = useState(`${styles.header}`);
  const [chkHamb, setChkHamb] = useState(true);

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

  const handleHamb = () => {
    chkHamb ? setChkHamb(false) : setChkHamb(true);
  };

  return (
    <header ref={headerRef} className={headerClass}>
      <div className={styles.logo}>
        <span className={styles.mainLogo}>SUDOL</span>
        <span className={styles.mainLogo_info}>Portfolio</span>
      </div>
      <div
        className={`${styles.menu} ${
          chkHamb ? styles.actHamb : styles.actClose
        }`}
      >
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.hamb} onClick={handleHamb} href="#">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
