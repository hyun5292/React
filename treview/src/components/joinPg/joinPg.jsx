import React from "react";
import Grid from "@mui/material/Grid";
import styles from "./joinPg.module.css";
import pStyle from "../../css/page.module.css";

const JoinPg = (props) => {
  return (
    <div className={`${styles.joinPg} ${pStyle.pgMargin}`}>
      <div className={styles.title}>회원가입</div>
      <form action="#" className={styles.formCont}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} className={styles.formItem}>
            *<label>아이디</label>
            <input type="text" placeholer="아이디" />*<label>비밀번호</label>
            <input type="text" placeholer="비밀번호" />*<label>전화번호</label>
            <div className={styles.phoneNum}>
              <input type="number" />-
              <input type="number" />-
              <input type="number" />
            </div>
            <label>이메일</label>
            <input type="text" placeholer="아이디" />
          </Grid>
          <Grid item xs={12} md={6} className={styles.uploadCont}>
            <input
              type="file"
              id="uploadImg"
              style={{ display: "none" }}
              accept=".jpg, .png"
            />
            <label for="uploadImg" className={styles.btnUpload}>
              <img
                className={styles.uploadImg}
                src="./images/uploadImg.png"
                alt="이미지 추가"
                style={{ width: "6rem", height: "auto" }}
              />
            </label>
            <label>프로필 사진 추가</label>
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
              <label for="chkBad">동의합니다</label>
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
