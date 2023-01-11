import React from "react";
import styles from "./loginPg.module.css";
import { FaArrowLeft } from "react-icons/fa";

const LoginPg = (props) => {
  return (
    <div className={styles.loginPg}>
      <div className={styles.loginCont}>
        <div className={styles.formCont}>
          <button className={styles.backBtn}>
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
        <span className={styles.logo}>Truck + Review</span>
      </div>
    </div>
  );
};

export default LoginPg;
