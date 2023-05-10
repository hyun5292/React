import React from "react";
import { useOutletContext } from "react-router-dom";
import UserInputForm from "../user_input_form/user_input_form";
import styles from "./user_join.module.css";
import pStyle from "../../css/page.module.css";
import { BsChatSquareQuoteFill } from "react-icons/bs";

const UserJoin = (props) => {
  const { doJoin } = useOutletContext();

  const onJoin = (uData, profile) => {
    doJoin(uData, profile);
  };

  return (
    <div className={`${styles.userJoin} ${pStyle.page}`}>
      <div className={styles.title}>
        <span>회원가입</span>
        <div className={styles.colonIcon}>
          <BsChatSquareQuoteFill />
        </div>
      </div>
      <UserInputForm btnName="가입하기" onBtnClick={onJoin} />
    </div>
  );
};

export default UserJoin;
