import React from "react";
import UserInputForm from "../user_input_form/user_input_form";
import styles from "./user_join.module.css";
import pStyle from "../../css/page.module.css";
import { BsChatSquareQuoteFill } from "react-icons/bs";

const UserJoin = (props) => {
  return (
    <div className={`${styles.userJoin} ${pStyle.page}`}>
      <div className={styles.title}>
        <span>회원가입</span>
        <div className={styles.colonIcon}>
          <BsChatSquareQuoteFill />
        </div>
      </div>
      <UserInputForm />
    </div>
  );
};

export default UserJoin;
