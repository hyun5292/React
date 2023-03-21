import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./loginPg.module.css";
import { FaArrowLeft } from "react-icons/fa";
import Select from "../select/select";
import EmailList from "../../dataFile/emailList.json";

const LoginPg = ({ authService }) => {
  const navigate = useNavigate();
  const addressRef = useRef();
  const pwdRef = useRef();
  const [emailKind, setEmailKind] = useState("");

  const onLogin = () => {
    const emailAddress = addressRef.current.value || "";
    const uEmail = emailAddress + "@" + emailKind;
    const uPwd = pwdRef.current.value || "";

    if (emailAddress === "") alert("이메일 주소를 입력해주세요!");
    else if (emailKind === "")
      alert(
        "이메일 종류를 선택해주세요!\n직접 입력한 경우 화살표 버튼을 클릭해주세요!"
      );
    else if (uPwd === "") alert("비밀번호를 입력해주세요!");
    else {
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
              ref={addressRef}
              className={styles.emailInput}
              type="text"
              placeholder="이메일 주소"
            />
            &nbsp;@&nbsp;
            <div className={styles.select}>
              <Select
                kindText="이메일"
                ulList={EmailList.emailList}
                setClicked={(email) => setEmailKind(email)}
              />
            </div>
          </div>
          <div className={styles.inputNm}>비밀번호</div>
          <input ref={pwdRef} type="password" placeholder="비밀번호" />
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
