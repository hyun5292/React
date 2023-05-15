import React from "react";
import UserInputForm from "../user_input_form/user_input_form";
import { useOutletContext } from "react-router-dom";
import styles from "./user_edit.module.css";
import pStyle from "../../css/page.module.css";
import { BsChatSquareQuoteFill } from "react-icons/bs";

const UserEdit = (props) => {
  const { getUserData, doEdit, doDelete } = useOutletContext();

  const onEdit = (newData, imgData) => {
    doEdit(newData, imgData);
  };

  const onDelete = (uId) => {
    doDelete(uId);
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
        doDelete={onDelete}
        btnName="수정하기"
        onBtnClick={onEdit}
      />
    </div>
  );
};

export default UserEdit;
