import React, { memo, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import styles from "./modifyPg.module.css";
import pStyle from "../../css/page.module.css";
import Select from "../select/select";
import phoneList from "../../dataFile/phone_num_list.json";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import ImageFileInput from "../imageFileInput/image_file_input";
import WithdrawBtn from "../withdrawBtn/withdrawBtn";

const ModifyPg = memo(({ imageUploader, authService }) => {
  const navigate = useNavigate();
  const tel2Ref = useRef();
  const tel3Ref = useRef();
  const [loading, setLoading] = useState(false);
  const [uData, setUData] = useState({});
  const [uTel1, setUTel1] = useState("");
  const [profile, setProfile] = useState({
    uProfileID: "",
    uProfileSIG: "",
    uProfileTIME: "",
    uProfileURL: "",
  });
  const [newProfile, setNewProfile] = useState({
    uProfileID: "",
    uProfileSIG: "",
    uProfileTIME: "",
    uProfileURL: "",
    uProfileLink: "",
  });

  const checkEmpty = () => {
    const newData = {
      ...uData,
      uTel: uTel1 + "-" + tel2Ref.current.value + "-" + tel3Ref.current.value,
    };

    if (tel2Ref.current.value === "") {
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
    } else {
      return newData;
    }
    return false;
  };

  const modifyData = () => {
    setLoading(true);
    const newData = checkEmpty();
    if (newData) {
      if (newProfile.uProfileURL !== "") {
        //cloudinary 사진 삭제 추가 필요
        imageUploader.uploadImg(newProfile).then((imgData) => {
          doUpdate(newData, imgData);
        });
      } else {
        doUpdate(newData, profile);
      }
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const doUpdate = (data, img) => {
    authService.update_uData(data, img).then((result) => {
      if (result) window.location.reload();
    });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) navigate("/");
      else {
        authService.get_UserData(user.displayName).then((userData) => {
          setUData({
            uId: user.displayName,
            uEmail: userData.uEmail,
            uName: userData.uName,
            uTel: userData.uTel,
          });
          setUTel1((userData.uTel || "").split("-")[0]);
          setProfile({
            uProfileID: userData.uProfileID,
            uProfileSIG: userData.uProfileSIG,
            uProfileTIME: userData.uProfileTIME,
            uProfileURL: userData.uProfileURL,
          });
        });
      }
    });
  }, [authService, navigate]);

  return (
    <div className={`${styles.modifyPg} ${pStyle.pgPadding}`}>
      <div className={styles.title}>
        <span>회원정보수정</span>
        <div className={styles.colonIcon}>
          <BsChatSquareQuoteFill />
        </div>
      </div>
      <div className={styles.formCont}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} className={styles.formItem}>
            <label>이메일</label>
            <input
              disabled
              className={styles.emailInput}
              type="text"
              value={(uData && uData.uEmail) || ""}
            />
            <label>이름</label>
            <input
              disabled
              type="text"
              placeholer="이름"
              value={(uData && uData.uName) || ""}
            />
            *<label>전화번호</label>
            <div className={styles.phoneNum}>
              <div className={`${styles.uTel} ${styles.select}`}>
                <Select
                  kindText={uTel1}
                  ulList={phoneList.phoneList}
                  setClicked={(phoneNum) => setUTel1(phoneNum)}
                />
              </div>
              -
              <input
                ref={tel2Ref}
                className={styles.uTel}
                type="number"
                defaultValue={(uData.uTel || "").split("-")[1] || ""}
              />
              -
              <input
                ref={tel3Ref}
                className={styles.uTel}
                type="number"
                defaultValue={(uData.uTel || "").split("-")[2] || ""}
              />
            </div>
            <label className={styles.loginedAgree}>
              악의적인 리뷰를 남길 경우 통보없이 자체적으로 리뷰가 삭제되거나
              <br />
              탈퇴 될 수 있습니다
            </label>
            <WithdrawBtn uId={uData.uId} authService={authService} />
          </Grid>
          <Grid item xs={12} md={6} className={styles.uploadCont}>
            <ImageFileInput
              uProfile={
                newProfile.uProfileLink
                  ? newProfile.uProfileLink
                  : profile.uProfileURL
              }
              onFileChange={setNewProfile}
              onFileReset={setProfile}
            />
          </Grid>
          <Grid item xs={12}>
            <button className={styles.modifyBtn} onClick={modifyData}>
              {loading ? <span>loading...</span> : <span>수정하기</span>}
            </button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
});

export default ModifyPg;
