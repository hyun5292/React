import React, { useRef, useState } from "react";
import { Grid } from "@mui/material";
import Select from "../select/select";
import ImgUploader from "../img_uploader/img_uploader";
import TelList from "../../dataFile/tel_num_list.json";
import EmailList from "../../dataFile/emailList.json";
import styles from "./user_input_form.module.css";

const UserInputForm = ({ uData, onDelete, btnName, onBtnClick }) => {
  console.log("UserInputForm uData = ", uData);
  const emailRef = useRef();
  const pwdRef = useRef();
  const nameRef = useRef();
  const tel2Ref = useRef();
  const tel3Ref = useRef();
  const agreeRef = useRef();
  const [profile, setProfile] = useState({
    uProfileID: "",
    uProfileSIG: "",
    uProfileTIME: "",
    uProfileURL: "",
    uProfileLink: "",
  });
  const [email, setEmail] = useState("");
  const [tel1, setTel1] = useState("010");

  const checkEmpty = () => {
    if (!onDelete && emailRef.current.value === "") {
      alert("이메일을 입력해주세요!");
      emailRef.current.focus();
    } else if (email === "") {
      alert("이메일 종류를 선택해주세요!");
      emailRef.current.focus();
    } else if (!onDelete && pwdRef.current.value === "") {
      alert("비밀번호를 입력해주세요!");
      pwdRef.current.focus();
    } else if (nameRef.current.value === "") {
      alert("이름을 입력해주세요!");
      nameRef.current.focus();
    } else if (
      tel2Ref.current.value.length !== 3 &&
      tel2Ref.current.value.length !== 4
    ) {
      alert("잘못된 전화번호입니다!");
      tel2Ref.current.focus();
    } else if (tel3Ref.current.value.length !== 4) {
      alert("잘못된 전화번호입니다!");
      tel3Ref.current.focus();
    } else if (tel2Ref.current.value === "") {
      alert("전화번호를 입력해주세요!");
      tel2Ref.current.focus();
    } else if (tel3Ref.current.value === "") {
      alert("전화번호를 입력해주세요!");
      tel3Ref.current.focus();
    } else if (!onDelete && !agreeRef.current.checked) {
      alert("약관에 동의해주세요!");
      agreeRef.current.focus();
    } else return true;
    return false;
  };

  const handleClick = () => {
    const address = emailRef.current.value.replace(/[\s@-^$*+?.()|[\]{}]/g, "");
    const newData = {
      uId: onDelete
        ? uData[0].uEmail
        : (address + email).replace(/[\s@-^$*+?.()|[\]{}]/g, ""),
      uEmail: onDelete ? "" : address + "@" + email,
      uPwd: onDelete ? "" : pwdRef.current.value,
      uName: nameRef.current.value,
      uTel: tel1 + "-" + tel2Ref.current.value + "-" + tel3Ref.current.value,
    };

    if (checkEmpty()) {
      onBtnClick(newData, profile);
    }
  };

  return (
    <div className={styles.user_input_form}>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          md={6}
          className={`${styles.formItem} ${styles.inputForm}`}
        >
          <label>* 이메일</label>
          <div className={styles.emailCont}>
            <input
              ref={emailRef}
              disabled={onDelete ? true : false}
              className={styles.emailInput}
              type="text"
              defaultValue={uData && uData[0].uEmail}
            />
            {onDelete ? (
              ""
            ) : (
              <>
                @
                <div className={`${styles.emailInput} ${styles.select}`}>
                  <Select
                    kind={"이메일"}
                    list={EmailList.emailList}
                    setKind={setEmail}
                  />
                </div>
              </>
            )}
          </div>
          {onDelete ? (
            ""
          ) : (
            <>
              <label>* 비밀번호</label>
              <input ref={pwdRef} type="password" placeholer="비밀번호" />
            </>
          )}
          <label>* 이름</label>
          <input
            ref={nameRef}
            type="text"
            placeholer="이름"
            defaultValue={uData && uData[0].uName}
          />
          <label>* 전화번호</label>
          <div className={styles.telCont}>
            <div className={`${styles.telItem} ${styles.select}`}>
              <Select
                kind={uData ? uData[0].uTel.split("-")[0] : "010"}
                list={TelList.telList}
                setKind={setTel1}
              />
            </div>
            -
            <input
              ref={tel2Ref}
              className={styles.telItem}
              type="number"
              defaultValue={uData && uData[0].uTel.split("-")[1]}
            />
            -
            <input
              ref={tel3Ref}
              className={styles.telItem}
              type="number"
              defaultValue={uData && uData[0].uTel.split("-")[2]}
            />
          </div>
          {onDelete ? (
            <button className={styles.delete_btn} onClick={onDelete}>
              탈퇴하기
            </button>
          ) : (
            ""
          )}
        </Grid>
        <Grid item xs={12} md={6} className={styles.formItem}>
          <ImgUploader
            profile={uData && uData[0].uProfileURL}
            handleProfile={setProfile}
          />
        </Grid>
        <Grid
          item
          xs={12}
          className={`${styles.formItem} ${styles.chkAgreeCont}`}
        >
          <label>
            악의적인 리뷰를 남길 경우 통보없이 자체적으로 리뷰가 삭제되거나 탈퇴
            될 수 있습니다
          </label>
          {onDelete ? (
            ""
          ) : (
            <div className={styles.chkAgreeItem}>
              <input
                ref={agreeRef}
                type="checkbox"
                name="chkBad"
                value="checked"
                className={styles.chkAgree}
              />
              <label htmlFor="chkBad">동의합니다</label>
            </div>
          )}
        </Grid>
        <Grid item xs={12} className={styles.formItem}>
          <button className={styles.join_btn} onClick={handleClick}>
            {btnName}
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserInputForm;
