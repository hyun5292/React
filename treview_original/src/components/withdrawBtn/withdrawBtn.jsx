import React, { memo } from "react";
import styles from "./withdrawBtn.module.css";

const WithdrawBtn = memo(({ uId, authService }) => {
  const onWithDraw = () => {
    //cloudinary 사진 삭제 추가 필요
    if (window.confirm("탈퇴하시겠습니까?")) {
      authService.remove_uData(uId).then((result) => {
        result &&
          authService.withdraw_user().then((result) => {
            result && window.location.reload();
          });
      });
    }
  };

  return (
    <button className={styles.withDrawBtn} onClick={onWithDraw}>
      탈퇴하기
    </button>
  );
});

export default WithdrawBtn;
