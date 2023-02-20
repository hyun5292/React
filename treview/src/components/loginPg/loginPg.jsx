import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./loginPg.module.css";
import Select from "../select/select.jsx";
import EmailList from "../../service/emailList.json";
import { FaArrowLeft } from "react-icons/fa";

const LoginPg = ({ authService }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const onLogin = () => {
    const uEmail = document.getElementById("uEmail").value + "@" + email;
    const uPwd = document.getElementById("uPwd").value;
    authService.login(uEmail, uPwd);
    navigate("/");
  };

  return (
    <div className={styles.loginPg}>
      <div className={styles.loginCont}>
        <div className={styles.formCont}>
          <button className={styles.backBtn} onClick={() => navigate("/")}>
            <FaArrowLeft className={styles.icon} />
          </button>
          <div id="uEmail" className={styles.inputNm}>
            이메일
          </div>
          <div className={styles.emailCont}>
            <input
              className={styles.emailInput}
              type="text"
              placeholder="이메일 주소"
            />
            &nbsp;@&nbsp;
            <div className={styles.select}>
              <Select
                className={styles.emailInput}
                kindText="이메일"
                ulList={EmailList.emailList}
                setClicked={(email) => setEmail(email)}
              />
            </div>
          </div>
          <div className={styles.inputNm}>비밀번호</div>
          <input id="uPwd" type="password" placeholder="비밀번호" />
          <button className={styles.doLoginBtn} onClick={onLogin}>
            로그인
          </button>
        </div>
        <div className={styles.logoCont}>
          <img
            className={styles.logo}
            src="./images/truck_white.png"
            alt="하얀색 로고"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPg;
