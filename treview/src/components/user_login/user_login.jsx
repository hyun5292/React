import React, { useRef, useState } from "react";
import EmailList from "../../dataFile/emailList.json";
import { useOutletContext } from "react-router-dom";
import Select from "../select/select";
import styles from "./user_login.module.css";
import { FaArrowLeft } from "react-icons/fa";

const UserLogin = (props) => {
  const idRef = useRef();
  const pwdRef = useRef();
  const { goMain, doLogin } = useOutletContext();
  const [email, setEmail] = useState("");

  const onLogin = (event) => {
    event.preventDefault();
    const emailAddress = idRef.current.value || "";
    const uEmail = emailAddress + "@" + email;
    const uPwd = pwdRef.current.value || "";

    if (emailAddress === "") alert("이메일 주소를 입력해주세요!");
    else if (email === "") {
      alert(
        "이메일 종류를 선택해주세요!\n직접 입력한 경우 화살표 버튼을 클릭해주세요!"
      );
      idRef.current.focus();
    } else if (uPwd === "") {
      alert("비밀번호를 입력해주세요!");
      pwdRef.current.focus();
    } else {
      doLogin(uEmail, uPwd);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginCont}>
        <div className={styles.leftCont}>
          <button className={styles.back_btn} onClick={goMain}>
            <FaArrowLeft className={styles.icon} />
          </button>
          <form className={styles.formCont}>
            <div className={styles.input_title}>이메일</div>
            <div className={styles.emailCont}>
              <input
                ref={idRef}
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
            <input ref={pwdRef} type="password" placeholder="비밀번호" />
            <button className={styles.login_btn} onClick={onLogin}>
              로그인
            </button>
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
