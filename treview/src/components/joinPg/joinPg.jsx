import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./joinPg.module.css";
import pStyle from "../../css/page.module.css";

const JoinPg = (props) => {
  return (
    <div className={`${styles.joinPg} ${pStyle.pgMargin}`}>
      <div className={styles.title}>회원가입</div>
      <div className={styles.formCont}>
        <form action="#">
          <Grid container spacing={1}>
            <Grid item xs={6} className={styles.formItem}>
              *<label>아이디</label>
              <input type="text" placeholer="아이디" />*<label>비밀번호</label>
              <input type="text" placeholer="비밀번호" />
            </Grid>
            <Grid
              item
              xs={6}
              className={`${styles.formItem} ${styles.uploadCont}`}
            >
              <input
                type="file"
                id="uploadImg"
                style={{ display: "none" }}
                accept=".jpg, .png"
              />
              <label for="uploadImg" className={styles.btnUpload}>
                <img
                  className={styles.uploadImg}
                  src="./assets/uploadImg.png"
                  alt="이미지 추가"
                  style={{ width: "6rem", height: "auto" }}
                />
              </label>
              <label>프로필 사진 추가</label>
            </Grid>
            <Grid item xs={12} className={styles.formItem}>
              *<label>전화번호</label>
              <input type="text" placeholer="아이디" />
            </Grid>
            <Grid item xs={12} className={styles.formItem}>
              <label>이메일</label>
              <input type="text" placeholer="아이디" />
            </Grid>
            <Grid item xs={12} className={styles.formItem}>
              <label>악의적인 리뷰를 달지 않겠다는 동의</label>
              <label className={styles.chkBadCont}>
                <input
                  type="checkbox"
                  name="chkBad"
                  className={styles.chkBad}
                />
                동의합니다
              </label>
            </Grid>
            <Grid item xs={12}>
              <button className={styles.joinBtn}>가입하기</button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default JoinPg;
