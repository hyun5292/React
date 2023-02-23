import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./loginPg.module.css";
import Select from "../select/select.jsx";
import EmailList from "../../service/emailList.json";
import { FaArrowLeft } from "react-icons/fa";

const LoginPg = ({ authService }) => {
  const navigate = useNavigate();
  const [emailKind, setEmailKind] = useState("");

  const onLogin = () => {
    const emailAddress = document.getElementById("uEmail").value;
    const uEmail = document.getElementById("uEmail").value + "@" + emailKind;
    const uPwd = document.getElementById("uPwd").value;

    if (emailAddress === "" || emailAddress === undefined) {
      alert("이메일 주소를 입력해주세요!");
    } else if (emailKind === "" || emailKind === null) {
      alert("이메일 종류를 선택해주세요!");
    } else if (uPwd === "" || uPwd === null) {
      alert("비밀번호를 입력해주세요!");
    } else {
      authService
        .login(uEmail, uPwd)
        .then((result) => (result === "success" ? navigate("/") : ""));
    }
  };

  return (
    <div className={styles.loginPg}>
      <div className={styles.loginCont}>
        <div className={styles.formCont}>
          <button className={styles.backBtn} onClick={() => navigate("/")}>
            <FaArrowLeft className={styles.icon} />
          </button>
          <div className={styles.inputNm}>이메일</div>
          <div className={styles.emailCont}>
            <input
              id="uEmail"
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
                setClicked={(email) => setEmailKind(email)}
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
