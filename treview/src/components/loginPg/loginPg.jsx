import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./loginPg.module.css";
import { FaArrowLeft } from "react-icons/fa";

const LoginPg = (props) => {
  const navigate = useNavigate();

  return (
    <div className={styles.loginPg}>
      <div className={styles.loginCont}>
        <div className={styles.formCont}>
          <button className={styles.backBtn} onClick={() => navigate("/")}>
            <FaArrowLeft className={styles.icon} />
          </button>
          <form action="#">
            <div className={styles.inputNm}>아이디</div>
            <input type="text" placeholder="아이디" />
            <div className={styles.inputNm}>비밀번호</div>
            <input type="password" placeholder="비밀번호" />
            <button className={styles.doLoginBtn}>로그인</button>
          </form>
        </div>
        <div className={styles.logoCont}>
          <img
            className={styles.logo}
            src="./assets/truck_white.png"
            alt="하얀색 로고"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPg;
