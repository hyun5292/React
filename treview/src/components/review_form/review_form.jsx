import React, { useEffect, useState } from "react";
import styles from "./review_form.module.css";
import { TbBuildingFactory2 } from "react-icons/tb";
import { RiText } from "react-icons/ri";
import { MdOutlinePermIdentity, MdOutlineDateRange } from "react-icons/md";

const ReviewForm = ({ uEmail, BIZPLC_NM }) => {
  const [today_show, setToday_show] = useState();
  const [today, setToday] = useState();

  useEffect(() => {
    const date = new Date();
    const now =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      date.getDate() +
      " " +
      date.getHours().toString() +
      ":" +
      date.getMinutes().toString() +
      ":" +
      date.getSeconds().toString();
    const show =
      date.getFullYear() +
      "년 " +
      (date.getMonth() + 1) +
      "월 " +
      date.getDate() +
      "일";
    setToday(now);
    setToday_show(show);
  }, []);

  return (
    <div className={styles.review_form}>
      <div className={styles.factory_name}>
        <TbBuildingFactory2 />
        {BIZPLC_NM}
      </div>
      <div className={styles.input_cont}>
        <div className={styles.input_item}>
          <RiText className={styles.icon} />
          :&nbsp;
          <input
            className={styles.rTitle}
            type="text"
            placeholder="제목을 입력해주세요"
          />
        </div>
        <div className={styles.input_item}>
          <MdOutlinePermIdentity className={styles.icon} />
          :&nbsp;
          <span className={styles.mId}>{uEmail}</span>
        </div>
        <div className={styles.input_item}>
          <MdOutlineDateRange className={styles.icon} />
          :&nbsp;
          <span className={styles.rDate}>{today_show}</span>
        </div>
        <textarea
          className={styles.review_textarea}
          cols="30"
          rows="10"
          maxLength="500"
          placeholder="내용을 입력해주세요"
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
