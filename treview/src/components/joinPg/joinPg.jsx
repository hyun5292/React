import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import styles from "./joinPg.module.css";
import pStyle from "../../css/page.module.css";
import EmailList from "../../service/emailList.json";
import Select from "../select/select";

const JoinPg = (props) => {
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");

  const loadFile = (event) => {
    console.log("file = ", event.target.files[0]);
    const file = URL.createObjectURL(event.target.files[0]);
    setProfile(file);

    // const newImage = document.createElement("img");
    // newImage.setAttribute("class", "img");
    // newImage.src = URL.createObjectURL(file);
    // newImage.style.width = "70%";
    // newImage.style.height = "70%";
    // newImage.style.objectFit = "contain";

    const cont = document.getElementById("profileImg");
    // cont.appendChild(newImage);
    cont.style.display = "inline-block";

    const check = document.getElementById("profileCont");
    check.style.display = "none";

    console.log("before = ", profile);
    URL.revokeObjectURL(event.target.files[0]);
    console.log("after = ", profile);
  };

  return (
    <div className={`${styles.joinPg} ${pStyle.pgMargin}`}>
      <div className={styles.title}>회원가입</div>
      <form action="#" className={styles.formCont}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} className={styles.formItem}>
            *<label>이메일</label>
            <div className={styles.emailCont}>
              <input className={styles.emailInput} type="text" />
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
            <input type="text" placeholer="비밀번호" />*<label>이름</label>
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
            <button className={styles.joinBtn}>가입하기</button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default JoinPg;
