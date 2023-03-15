import React, { memo, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import styles from "./joinPg.module.css";
import pStyle from "../../css/page.module.css";
import phoneList from "../../dataFile/phone_num_list.json";
import SelectEmail from "../selectEmail/selectEmail";
import Select from "../select/select";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import ImageFileInput from "../imageFileInput/image_file_input";

const JoinPg = memo(({ imageUploader, authService }) => {
  const navigate = useNavigate();
  const isMounted = useRef(false);
  const addressRef = useRef();
  const pwdRef = useRef();
  const nameRef = useRef();
  const tel2Ref = useRef();
  const tel3Ref = useRef();
  const chkAgreeRef = useRef();
  const [emailKind, setEmailKind] = useState("");
  const [uTel1, setUTel1] = useState("010");
  const [profile, setProfile] = useState(null);

  const checkEmpty = () => {
    const uAddress = addressRef.current.value.replace(" ", "") || "";
    const uPwd = pwdRef.current.value.replace(" ", "") || "";
    const uName = nameRef.current.value.replace(" ", "") || "";
    const uTel2 = tel2Ref.current.value.replace(" ", "") || "";
    const uTel3 = tel3Ref.current.value.replace(" ", "") || "";
    const chkAgree = chkAgreeRef.current.checked || false;

    if (uAddress === "") alert("이메일 주소를 입력해주세요!");
    else if (emailKind === "")
      alert(
        "이메일 종류를 선택해주세요!\n직접 입력한 경우 화살표 버튼을 클릭해주세요!"
      );
    else if (uPwd === "") alert("비밀번호를 입력해주세요!");
    else if (uName === "") alert("이름을 입력해주세요!");
    else if (uTel2 === "") alert("전화번호를 입력해주세요!");
    else if (uTel3 === "") alert("전화번호를 입력해주세요!");
    else if (uTel2.length !== 4 || uTel3.length !== 4)
      alert("잘못된 전화번호입니다!");
    else if (!chkAgree) alert('"동의합니다"를 체크해주세요!');
    else {
      return true;
    }
    return false;
  };

  const newJoin = () => {
    const uEmail = addressRef.current.value + "@" + emailKind;

    const userData = {
      uId: uEmail.replace(/[@-^$*+?.()|[\]{}]/g, ""),
      uEmail: uEmail,
      uPwd: pwdRef.current.value,
      uName: nameRef.current.value,
      uTel: uTel1 + tel2Ref.current.value + tel3Ref.current.value,
      uProfile: "",
    };

    if (checkEmpty()) {
      authService.join(userData).then((result) => {
        if (result) {
          if (profile !== null) {
            imageUploader.uploadImg(profile).then((imgUrl) => {
              authService.join_data(userData, imgUrl);
            });
          } else {
            authService.join_data(userData, "");
          }
          navigate("/");
        }
      });
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      authService.onAuthChange((user) => {
        if (user) {
          alert("비정상적인 접근입니다! 메인화면으로 이동합니다!");
          navigate("/");
        }
      });
    } else {
      isMounted.current = true;
    }
  }, [authService, navigate]);

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
              <input
                ref={addressRef}
                className={styles.emailInput}
                type="text"
              />
              &nbsp;@&nbsp;
              <div className={`${styles.emailInput} ${styles.select}`}>
                <SelectEmail setEKind={(email) => setEmailKind(email)} />
              </div>
            </div>
            *<label>비밀번호</label>
            <input ref={pwdRef} type="password" placeholer="비밀번호" />*
            <label>이름</label>
            <input ref={nameRef} type="text" placeholer="이름" />*
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
              <input ref={tel2Ref} className={styles.uTel} type="number" />
              -
              <input ref={tel3Ref} className={styles.uTel} type="number" />
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={styles.uploadCont}>
            <ImageFileInput onFileChange={(file) => setProfile(file)} />
          </Grid>
          <Grid item xs={12} className={styles.chkAgreeCont}>
            <label>
              악의적인 리뷰를 남길 경우 자체적으로 리뷰가 삭제되거나 탈퇴 될 수
              있습니다
            </label>
            <div className={styles.chkAgreeItem}>
              <input
                ref={chkAgreeRef}
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
});

export default JoinPg;
