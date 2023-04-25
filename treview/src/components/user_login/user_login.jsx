import React, { useState } from "react";
import EmailList from "../../dataFile/emailList.json";
import Select from "../select/select";
import styles from "./user_login.module.css";
import { FaArrowLeft } from "react-icons/fa";

const UserLogin = (props) => {
  const [email, setEmail] = useState("");

  return (
    <div className={styles.login}>
      <div className={styles.loginCont}>
        <div className={styles.leftCont}>
          <button className={styles.back_btn}>
            <FaArrowLeft className={styles.icon} />
          </button>
          <form className={styles.formCont}>
            <div className={styles.input_title}>이메일</div>
            <div className={styles.emailCont}>
              <input
                className={styles.email_input}
                type="text"
                placeholder="이메일 주소"
              />
              @
              <div className={styles.select}>
                <Select
                  kind={"이메일"}
                  list={EmailList.emailList}
                  setKind={setEmail}
                />
              </div>
            </div>
            <div className={styles.input_title}>비밀번호</div>
            <input type="password" placeholder="비밀번호" />
            <button className={styles.login_btn}>로그인</button>
          </form>
        </div>
        <div className={styles.logoCont}>
          <img
            className={styles.logo}
            src="../images/truck_white.png"
            alt="하얀색 로고"
          />
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
