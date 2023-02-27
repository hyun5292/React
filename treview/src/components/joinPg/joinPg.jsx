import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import styles from "./joinPg.module.css";
import pStyle from "../../css/page.module.css";
import EmailList from "../../service/emailList.json";
import Select from "../select/select";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { BsArrowClockwise } from "react-icons/bs";

const JoinPg = ({ authService }) => {
  const navigate = useNavigate();
  const [emailKind, setEmailKind] = useState("");
  const [profile, setProfile] = useState("");

  const newJoin = () => {
    const uAddress = document.getElementById("uAddress").value;
    const uEmail = uAddress + "@" + emailKind;
    const uPwd = document.getElementById("uPwd").value;
    const uName = document.getElementById("uName").value;
    const uTel =
      document.getElementById("uTel1").value +
      document.getElementById("uTel2").value +
      document.getElementById("uTel3").value;
    const chkAgree = document.getElementById("chkAgree").checked;

    if (uAddress === "" || uAddress === undefined || uAddress === null) {
      alert("이메일 주소를 입력해주세요!");
    } else if (
      emailKind === "" ||
      emailKind === undefined ||
      emailKind === null
    ) {
      alert("이메일 종류를 선택해주세요!");
    } else if (uPwd === "" || uPwd === undefined || uPwd === null) {
      alert("비밀번호를 입력해주세요!");
    } else if (uName === "" || uName === undefined || uName === null) {
      alert("이름을 입력해주세요!");
    } else if (uTel === "" || uTel === undefined || uTel === null) {
      alert("전화번호를 입력해주세요!");
    } else if (!chkAgree) {
      alert('"동의합니다"를 체크해주세요!');
    } else {
      authService
        .join(uEmail, uPwd)
        .then((result) => (result === "success" ? navigate("/login") : ""));
    }
  };

  const loadFile = (event) => {
    const file = URL.createObjectURL(event.target.files[0]);
    setProfile(file);

    const cont = document.getElementById("profileImg");
    cont.style.display = "inline-block";

    const resetBtn = document.getElementById("resetImg");
    resetBtn.style.display = "flex";

    const check = document.getElementById("profileCont");
    check.style.display = "none";

    URL.revokeObjectURL(event.target.files[0]);
  };

  const resetProfile = () => {
    setProfile("");

    const cont = document.getElementById("profileImg");
    cont.style.display = "none";

    const resetBtn = document.getElementById("resetImg");
    resetBtn.style.display = "none";

    const check = document.getElementById("profileCont");
    check.style.display = "flex";
  };

  return (
    <div className={`${styles.joinPg} ${pStyle.pgPadding}`}>
      <div className={styles.title}>
        <span>회원가입</span>
        <div className={styles.colonIcon}>
          <BsChatSquareQuoteFill />
        </div>
      </div>
      <div className={styles.formCont}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} className={styles.formItem}>
            *<label>이메일</label>
            <div className={styles.emailCont}>
              <input id="uAddress" className={styles.emailInput} type="text" />
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
            *<label>비밀번호</label>
            <input id="uPwd" type="password" placeholer="비밀번호" />*
            <label>이름</label>
            <input id="uName" type="text" placeholer="이름" />*
            <label>전화번호</label>
            <div className={styles.phoneNum}>
              <input id="uTel1" type="number" />-
              <input id="uTel2" type="number" />-
              <input id="uTel3" type="number" />
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={styles.uploadCont}>
            <div className={styles.inputFileCont}>
              <input
                type="file"
                id="uploadImg"
                name="uploadImg"
                style={{ display: "none" }}
                accept=".jpg, .png"
                onChange={(event) => loadFile(event)}
              />
              <div className={styles.profileCont} id="profileCont">
                <label htmlFor="uploadImg" className={styles.btnUpload}>
                  <img
                    className={styles.uploadImg}
                    src="./images/uploadImg.png"
                    alt="이미지 추가"
                    style={{ width: "6rem", height: "auto" }}
                  />
                </label>
                <label htmlFor="profileText">프로필 사진 추가</label>
              </div>
              <img
                src={profile}
                alt="프로필 이미지"
                id="profileImg"
                width="400px"
                height="400px"
                className={styles.profileImg}
              ></img>
            </div>
            <button
              id="resetImg"
              className={styles.resetImg}
              onClick={resetProfile}
            >
              <BsArrowClockwise />
            </button>
          </Grid>
          <Grid item xs={12} className={styles.chkAgreeCont}>
            <label>
              악의적인 리뷰를 남길 경우 자체적으로 리뷰가 삭제되거나 탈퇴 될 수
              있습니다
            </label>
            <div className={styles.chkAgreeItem}>
              <input
                id="chkAgree"
                type="checkbox"
                name="chkBad"
                value="checked"
                className={styles.chkAgree}
              />
              <label htmlFor="chkBad">동의합니다</label>
            </div>
          </Grid>
          <Grid item xs={12}>
            <button className={styles.joinBtn} onClick={newJoin}>
              가입하기
            </button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default JoinPg;
