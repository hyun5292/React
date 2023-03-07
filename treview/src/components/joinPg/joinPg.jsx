import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import styles from "./joinPg.module.css";
import pStyle from "../../css/page.module.css";
import phoneList from "../../service/phone_num_list.json";
import SelectEmail from "../selectEmail/selectEmail";
import Select from "../select/select";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { BsArrowClockwise } from "react-icons/bs";

const JoinPg = ({ authService }) => {
  const navigate = useNavigate();
  const [emailKind, setEmailKind] = useState("");
  const [uTel1, setUTel1] = useState("010");
  const [profile, setProfile] = useState("");

  const checkEmpty = () => {
    const uAddress = document.getElementById("uAddress").value;
    const uPwd = document.getElementById("uPwd").value;
    const uName = document.getElementById("uName").value;
    const uTel2 = document.getElementById("uTel2").value;
    const uTel3 = document.getElementById("uTel3").value;
    const chkAgree = document.getElementById("chkAgree").checked;

    if (uAddress === "" || uAddress === undefined || uAddress === null) {
      alert("이메일 주소를 입력해주세요!");
    } else if (
      emailKind === "" ||
      emailKind === undefined ||
      emailKind === null
    ) {
      alert(
        "이메일 종류를 선택해주세요!\n직접 입력한 경우 화살표 버튼을 클릭해주세요!"
      );
    } else if (uPwd === "" || uPwd === undefined || uPwd === null) {
      alert("비밀번호를 입력해주세요!");
    } else if (uName === "" || uName === undefined || uName === null) {
      alert("이름을 입력해주세요!");
    } else if (uTel2 === "" || uTel2 === undefined || uTel2 === null) {
      alert("전화번호를 입력해주세요!");
    } else if (uTel3 === "" || uTel3 === undefined || uTel3 === null) {
      alert("전화번호를 입력해주세요!");
    } else if (!chkAgree) {
      alert('"동의합니다"를 체크해주세요!');
    } else if (uTel2.length < 3 || uTel2.length > 4) {
      alert("잘못된 전화번호입니다!");
      return false;
    } else if (uTel3.length < 3 || uTel3.length > 4) {
      alert("잘못된 전화번호입니다!");
      return false;
    } else {
      return true;
    }
    return false;
  };

  const newJoin = () => {
    const uEmail = document.getElementById("uAddress").value + "@" + emailKind;
    const uTel2 = document.getElementById("uTel2").value;
    const uTel3 = document.getElementById("uTel3").value;

    const userData = {
      uId: uEmail.replace(/[@-^$*+?.()|[\]{}]/g, ""),
      uEmail: uEmail,
      uPwd: document.getElementById("uPwd").value,
      uName: document.getElementById("uName").value,
      uTel: uTel1 + "-" + uTel2 + "-" + uTel3,
      uProfile: profile,
    };
    console.log("emailKind = ", emailKind);

    if (checkEmpty()) {
      authService
        .join(userData)
        .then(authService.join_data(userData))
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
              <div className={`${styles.emailInput} ${styles.select}`}>
                <SelectEmail setEKind={(email) => setEmailKind(email)} />
              </div>
            </div>
            *<label>비밀번호</label>
            <input id="uPwd" type="password" placeholer="비밀번호" />*
            <label>이름</label>
            <input id="uName" type="text" placeholer="이름" />*
            <label>전화번호</label>
            <div className={styles.phoneNum}>
              <div className={`${styles.uTel} ${styles.select}`}>
                <Select
                  className={styles.selectTel}
                  kindText="010"
                  ulList={phoneList.phoneList}
                  setClicked={(phoneNum) => setUTel1(phoneNum)}
                />
              </div>
              -
              <input className={styles.uTel} id="uTel2" type="number" />
              -
              <input className={styles.uTel} id="uTel3" type="number" />
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
