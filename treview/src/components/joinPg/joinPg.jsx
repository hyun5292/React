import React, { memo, useRef, useState, useEffect } from "react";
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
  const [islogined, setIsLogined] = useState(false);
  const [emailKind, setEmailKind] = useState("");
  const [uTel1, setUTel1] = useState("");
  const [profile, setProfile] = useState({});
  const [newProfile, setNewProfile] = useState({});

  const checkEmpty = () => {
    const uTel2 = tel2Ref.current.value.replace(" ", "") || "";
    const uTel3 = tel3Ref.current.value.replace(" ", "") || "";
    const chkAgree = chkAgreeRef.current.checked || false;
    const uEmail = addressRef.current.value + "@" + emailKind;

    const userData = {
      uId: uEmail.replace(/[@-^$*+?.()|[\]{}]/g, ""),
      uEmail: uEmail,
      uPwd: pwdRef.current.value,
      uName: nameRef.current.value,
      uTel: uTel1 + uTel2 + uTel3,
      uProfile: "",
    };

    if (userData.uId === "") alert("이메일 주소를 입력해주세요!");
    else if (emailKind === "")
      alert(
        "이메일 종류를 선택해주세요!\n직접 입력한 경우 화살표 버튼을 클릭해주세요!"
      );
    else if (userData.uPwd === "") alert("비밀번호를 입력해주세요!");
    else if (userData.uName === "") alert("이름을 입력해주세요!");
    else if (uTel1 === "") setUTel1("010");
    else if (uTel2 === "") alert("전화번호를 입력해주세요!");
    else if (uTel3 === "") alert("전화번호를 입력해주세요!");
    else if (uTel2.length !== 3 && uTel2.length !== 4)
      alert("잘못된 전화번호입니다!");
    else if (uTel3.length !== 4) alert("잘못된 전화번호입니다!");
    else if (!chkAgree) alert('"동의합니다"를 체크해주세요!');
    else {
      return userData;
    }
    return false;
  };

  const newJoin = () => {
    const userData = checkEmpty();
    if (userData) {
      authService.join(userData).then((result) => {
        if (result) {
          if (profile !== null) {
            imageUploader.uploadImg(newProfile).then((imgData) => {
              authService.join_data(userData, imgData);
            });
          } else {
            authService.join_data(userData, "");
          }
          navigate("/");
        }
      });
    }
  };

  const modifyData = (user) => {
    // const userData = checkEmpty();
    // if (userData) {
    // 기존 사진 삭제
    // 새 사진 추가
    // const newProfile = imageUploader.uploadImg(profile).then((imgUrl) => {
    //   return imgUrl;
    // });
    // 개인정보 업데이트
    //authService.update_uData(userData, newProfile).then(navigate("/"));
    // }
    imageUploader.deleteImg(profile).then((result) => {
      if (result) {
        setProfile({});
        console.log("modifyData result = ", result);
      }
    });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user !== null) {
        setIsLogined(true);
        authService.get_UserData(user.displayName).then((uData) => {
          addressRef.current.value = uData.uEmail.split("@")[0];
          setEmailKind(uData.uEmail.split("@")[1]);
          nameRef.current.value = uData.uName;
          setUTel1(uData.uTel.substr(0, 3));
          tel2Ref.current.value = uData.uTel.substr(3, 4);
          tel3Ref.current.value = uData.uTel.substr(7, 4);
          setProfile({ public_id: uData.uProfileID, url: uData.uProfileURL });
        });
      } else {
        setIsLogined(false);
      }
    });
  }, [authService]);

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
            {islogined ? (
              ""
            ) : (
              <>
                *<label>비밀번호</label>
                <input ref={pwdRef} type="password" placeholer="비밀번호" />
              </>
            )}
            *<label>이름</label>
            <input ref={nameRef} type="text" placeholer="이름" />*
            <label>전화번호</label>
            <div className={styles.phoneNum}>
              <div className={`${styles.uTel} ${styles.select}`}>
                <Select
                  kindText={uTel1 ? uTel1 : "010"}
                  ulList={phoneList.phoneList}
                  setClicked={(phoneNum) => setUTel1(phoneNum)}
                />
              </div>
              -
              <input ref={tel2Ref} className={styles.uTel} type="number" />
              -
              <input ref={tel3Ref} className={styles.uTel} type="number" />
            </div>
            {islogined ? (
              <>
                <label className={styles.loginedAgree}>
                  악의적인 리뷰를 남길 경우 통보없이 자체적으로 리뷰가
                  삭제되거나
                  <br />
                  탈퇴 될 수 있습니다
                </label>
                <button className={styles.withDrawBtn}>탈퇴하기</button>
              </>
            ) : (
              ""
            )}
          </Grid>
          <Grid item xs={12} md={6} className={styles.uploadCont}>
            <ImageFileInput
              uProfile={profile.url || null}
              onFileChange={(file) => setNewProfile(file)}
            />
          </Grid>
          {islogined ? (
            ""
          ) : (
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
          )}
          <Grid item xs={12}>
            {islogined ? (
              <button className={styles.joinBtn} onClick={modifyData}>
                <span>수정하기</span>
              </button>
            ) : (
              <button className={styles.joinBtn} onClick={newJoin}>
                <span>가입하기</span>
              </button>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
});

export default JoinPg;
