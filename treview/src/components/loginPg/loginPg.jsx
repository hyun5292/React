import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./loginPg.module.css";
import { FaArrowLeft } from "react-icons/fa";
import SelectEmail from "../selectEmail/selectEmail";

const LoginPg = ({ authService }) => {
  const navigate = useNavigate();
  const [emailKind, setEmailKind] = useState("");

  const onLogin = () => {
    const emailAddress = document.getElementById("uEmail").value;
    const uEmail = emailAddress + "@" + emailKind;
    const uPwd = document.getElementById("uPwd").value;
    console.log(emailKind);

    if (
      emailAddress === "" ||
      emailAddress === null ||
      emailAddress === undefined
    ) {
      alert("이메일 주소를 입력해주세요!");
    } else if (
      emailKind === "" ||
      emailKind === null ||
      emailKind === undefined
    ) {
      alert(
        "이메일 종류를 선택해주세요!\n직접 입력한 경우 화살표 버튼을 클릭해주세요!"
      );
    } else if (uPwd === "" || uPwd === null || uPwd === undefined) {
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
              <SelectEmail setEKind={(email) => setEmailKind(email)} />
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
