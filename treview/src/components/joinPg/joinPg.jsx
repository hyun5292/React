import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import styles from "./joinPg.module.css";
import pStyle from "../../css/page.module.css";
import EmailList from "../../service/emailList.json";
import Select from "../select/select";

const JoinPg = ({ authService }) => {
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");

  const newJoin = () => {
    const uEmail = document.getElementById("uEmail").value + "@" + email;
    const uPwd = document.getElementById("uPwd").value;

    authService.join(uEmail, uPwd);
  };

  const loadFile = (event) => {
    const file = URL.createObjectURL(event.target.files[0]);
    setProfile(file);

    const cont = document.getElementById("profileImg");
    cont.style.display = "inline-block";

    const check = document.getElementById("profileCont");
    check.style.display = "none";

    URL.revokeObjectURL(event.target.files[0]);
  };

  return (
    <div className={`${styles.joinPg} ${pStyle.pgMargin}`}>
      <div className={styles.title}>회원가입</div>
      <div className={styles.formCont}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} className={styles.formItem}>
            *<label>이메일</label>
            <div className={styles.emailCont}>
              <input id="uEmail" className={styles.emailInput} type="text" />
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
            *<label>비밀번호</label>
            <input id="uPwd" type="password" placeholer="비밀번호" />*
            <label>이름</label>
            <input type="text" placeholer="이름" />*<label>전화번호</label>
            <div className={styles.phoneNum}>
              <input type="number" />-
              <input type="number" />-
              <input type="number" />
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
                className={styles.profileImg}
              ></img>
            </div>
          </Grid>
          <Grid item xs={12} className={styles.chkAgreeCont}>
            <label>
              악의적인 리뷰를 남길 경우 자체적으로 리뷰가 삭제되거나 탈퇴 될 수
              있습니다
            </label>
            <div className={styles.chkAgreeItem}>
              <input
                type="checkbox"
                name="chkBad"
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
