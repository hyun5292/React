import React from "react";
import UserInputForm from "../user_input_form/user_input_form";
import { useOutletContext } from "react-router-dom";
import styles from "./user_edit.module.css";
import pStyle from "../../css/page.module.css";
import { BsChatSquareQuoteFill } from "react-icons/bs";

const UserEdit = (props) => {
  const { getUserData } = useOutletContext();

  const onEdit = (newData, imgData) => {
    console.log("user_edit onEdit = ", newData, imgData);
  };

  const onDelete = () => {
    console.log("user_edit onDelete");
  };

  return (
    <div className={`${styles.userEdit} ${pStyle.page}`}>
      <div className={styles.title}>
        <span>회원정보수정</span>
        <div className={styles.colonIcon}>
          <BsChatSquareQuoteFill />
        </div>
      </div>
      <UserInputForm
        getUserData={getUserData}
        onDelete={onDelete}
        btnName="수정하기"
        onBtnClick={onEdit}
      />
    </div>
  );
};

export default UserEdit;
