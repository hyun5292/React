import React, { memo, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import styles from "./joinPg.module.css";
import pStyle from "../../css/page.module.css";
import phoneList from "../../dataFile/phone_num_list.json";
import EmailList from "../../dataFile/emailList.json";
import Select from "../select/select";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import ImageFileInput from "../imageFileInput/image_file_input";

const JoinPg = memo(({ imageUploader, authService }) => {
  const navigate = useNavigate();
  const addressRef = useRef();
  const pwdRef = useRef();
  const nameRef = useRef();
  const tel2Ref = useRef();
  const tel3Ref = useRef();
  const chkAgreeRef = useRef();
  const [loading, setLoading] = useState(false);
  const [emailKind, setEmailKind] = useState("");
  const [uTel1, setUTel1] = useState("010");
  const [newProfile, setNewProfile] = useState(null);

  const checkEmpty = () => {
    const address = addressRef.current.value.replace(
      /[\s@-^$*+?.()|[\]{}]/g,
      ""
    );
    const newData = {
      uId: (address + emailKind).replace(/[\s@-^$*+?.()|[\]{}]/g, ""),
      uEmail: address + "@" + emailKind,
      uPwd: pwdRef.current.value,
      uName: nameRef.current.value,
      uTel: uTel1 + "-" + tel2Ref.current.value + "-" + tel3Ref.current.value,
      uProfileID: "",
      uProfileSIG: "",
      uProfileTIME: "",
      uProfileURL: "",
    };

    if (addressRef.current.value === "") {
      alert("이메일 주소를 입력해주세요!");
      addressRef.current.focus();
    } else if (emailKind === "") {
      alert(
        "이메일 종류를 선택해주세요!\n직접 입력한 경우 화살표 버튼을 클릭해주세요!"
      );
      addressRef.current.focus();
    } else if (pwdRef.current.value === "") {
      alert("비밀번호를 입력해주세요!");
      pwdRef.current.focus();
    } else if (nameRef.current.value === "") {
      alert("이름을 입력해주세요!");
      nameRef.current.focus();
    } else if (tel2Ref.current.value === "") {
      alert("전화번호를 입력해주세요!");
      tel2Ref.current.focus();
    } else if (tel3Ref.current.value === "") {
      alert("전화번호를 입력해주세요!");
      tel3Ref.current.focus();
    } else if (
      tel2Ref.current.value.length !== 3 &&
      tel2Ref.current.value.length !== 4
    ) {
      alert("잘못된 전화번호입니다!");
      tel2Ref.current.focus();
    } else if (tel3Ref.current.value.length !== 4) {
      alert("잘못된 전화번호입니다!");
      tel3Ref.current.focus();
    } else if (!chkAgreeRef.current.checked)
      alert('"동의합니다"를 체크해주세요!');
    else {
      return newData;
    }
    return false;
  };

  const newJoin = () => {
    setLoading(true);
    const uData = checkEmpty();

    if (uData) {
      authService.join(uData).then((result) => {
        if (result) {
          if (newProfile !== null) {
            imageUploader.uploadImg(newProfile).then((imgData) => {
              authService.join_data(uData, imgData);
              authService.update_Img(imgData.uProfileURL);
            });
          } else authService.join_data(uData, "");
        }
        navigate("/");
      });
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) navigate("/");
    });
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
                <Select
                  kindText={emailKind ? emailKind : "이메일"}
                  ulList={EmailList.emailList}
                  setClicked={(email) => setEmailKind(email)}
                />
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
                  kindText={uTel1}
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
            <ImageFileInput
              uProfile={null}
              onFileChange={(file) => setNewProfile(file)}
            />
          </Grid>
          <Grid item xs={12} className={styles.chkAgreeCont}>
            <label>
              악의적인 리뷰를 남길 경우 통보없이 자체적으로 리뷰가 삭제되거나
              탈퇴 될 수 있습니다
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
              {loading ? <span>loading...</span> : <span>가입하기</span>}
            </button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
});

export default JoinPg;
