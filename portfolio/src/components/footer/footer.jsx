import React from "react";
import styles from "./footer.module.css";
import { faAt, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  const onCopy = (copyKind, copyText) => {
    try {
      navigator.clipboard.writeText(copyText);

      alert(copyKind + " 이/가 복사되었습니다!");
    } catch (error) {
      console.log("footer:onCopy Error; ", error);
      alert("복사에 실패했습니다!");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.icon_wrap}>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faMobileAlt}
          onClick={() => onCopy("전화번호", "01099445292")}
        />
        <FontAwesomeIcon
          className={styles.icon}
          icon={faAt}
          onClick={() => onCopy("이메일", "tytyjacob@naver.com")}
        />
        <FontAwesomeIcon
          className={styles.icon}
          icon={faGithub}
          onClick={() => onCopy("깃허브 주소", "https://github.com/hyun5292")}
        />
        <FontAwesomeIcon
          className={styles.icon}
          icon={faInstagram}
          onClick={() =>
            onCopy("인스타URL", "https://www.instagram.com/green_frog_grog/")
          }
        />
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
