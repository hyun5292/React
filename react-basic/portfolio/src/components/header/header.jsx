import React, { useRef } from "react";
import { useEffect } from "react";
import styles from "./header.module.css";
import Navbar from "./navbar/navbar";

const Header = (props) => {
  const headerRef = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
    }, 1000);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      headerRef.current.style.position = "fixed";
    } else {
      headerRef.current.style.position = "inherit";
    }
  };

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.mainLogo}>SUDOL</span>
        <span className={styles.mainLogo_info}>Portfolio</span>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
