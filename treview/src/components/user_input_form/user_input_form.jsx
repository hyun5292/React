import React, { useState } from "react";
import { Grid } from "@mui/material";
import Select from "../select/select";
import ImgUploader from "../img_uploader/img_uploader";
import TelList from "../../dataFile/tel_num_list.json";
import EmailList from "../../dataFile/emailList.json";
import styles from "./user_input_form.module.css";

const UserInputForm = (props) => {
  const [email, setEmail] = useState("");
  const [tel1, setTel1] = useState("");

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
            <input className={styles.emailInput} type="text" />
            &nbsp;@&nbsp;
            <div className={`${styles.emailInput} ${styles.select}`}>
              <Select
                kind={"이메일"}
                list={EmailList.emailList}
                setKind={setEmail}
              />
            </div>
          </div>
          <label>* 비밀번호</label>
          <input type="password" placeholer="비밀번호" />
          <label>* 이름</label>
          <input type="text" placeholer="이름" />
          <label>* 전화번호</label>
          <div className={styles.telCont}>
            <div className={`${styles.telItem} ${styles.select}`}>
              <Select kind={"010"} list={TelList.telList} setKind={setTel1} />
            </div>
            -
            <input className={styles.telItem} type="number" />
            -
            <input className={styles.telItem} type="number" />
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={styles.formItem}>
          <ImgUploader />
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
          <div className={styles.chkAgreeItem}>
            <input
              type="checkbox"
              name="chkBad"
              value="checked"
              className={styles.chkAgree}
            />
            <label htmlFor="chkBad">동의합니다</label>
          </div>
        </Grid>
        <Grid item xs={12} className={styles.formItem}>
          <button className={styles.join_btn}>가입하기</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserInputForm;
