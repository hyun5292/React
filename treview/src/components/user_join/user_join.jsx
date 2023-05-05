import React from "react";
import Grid from "@mui/material/Grid";
import UserInputForm from "../user_input_form/user_input_form";
import ImgUploader from "../img_uploader/img_uploader";
import styles from "./user_join.module.css";
import { BsChatSquareQuoteFill } from "react-icons/bs";

const UserJoin = (props) => {
  return (
    <div className={styles.userJoin}>
      <Grid container spacing={1} className={styles.userJoin}>
        <Grid item xs={12} className={styles.formItem}>
          <div className={styles.title}>
            <span>회원가입</span>
            <div className={styles.colonIcon}>
              <BsChatSquareQuoteFill />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={styles.formItem}>
          <UserInputForm />
        </Grid>
        <Grid item xs={12} md={6} className={styles.formItem}>
          <ImgUploader />
        </Grid>
        <Grid item xs={12} className={styles.formItem}></Grid>
      </Grid>
    </div>
  );
};

export default UserJoin;
