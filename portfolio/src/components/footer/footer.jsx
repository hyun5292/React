import React from "react";
import styles from "./footer.module.css";

const Footer = (props) => {
  const onCopy = (copyText) => {
    try {
      navigator.clipboard.writeText(copyText);

      alert("복사되었습니다!");
    } catch (error) {
      console.log("footer:onCopy Error; ", error);
      alert("복사에 실패했습니다!");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.icon_wrap}>
        <button
          className={`${styles.icon} ${styles.phone}`}
          style={{ backgroundImage: "url(/images/sprite.png)" }}
          onClick={() => onCopy("01099445292")}
        >
          Phone
        </button>
        <button
          className={`${styles.icon} ${styles.email}`}
          style={{ backgroundImage: "url(/images/sprite.png)" }}
          onClick={() => onCopy("tytyjacob@naver.com")}
        >
          Email
        </button>
        <button
          className={`${styles.icon} ${styles.kakao}`}
          style={{ backgroundImage: "url(/images/sprite.png)" }}
          onClick={() => onCopy("sudol5292")}
        >
          Kakaotalk
        </button>
        <button
          className={`${styles.icon} ${styles.github}`}
          style={{ backgroundImage: "url(/images/sprite.png)" }}
          onClick={() => onCopy("https://github.com/hyun5292")} //현재
        >
          Github
        </button>
      </div>
      <div className={styles.text}>
        <div className={styles.sub}>클릭 시 클립보드에 복사됩니다!</div>
        <div className={styles.footer_copyright}>
          © 2021. Park Su Hyun. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
