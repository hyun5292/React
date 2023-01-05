import React from "react";
import styles from "./writeReviewPg.module.css";
import pgStyle from "../../css/page.module.css";
import { TbBuildingFactory2 } from "react-icons/tb";
import { RiText } from "react-icons/ri";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { MdOutlinePermIdentity, MdOutlineDateRange } from "react-icons/md";

const WriteReview = (props) => {
  const date = new Date();
  const today =
    date.getFullYear() +
    "년 " +
    (date.getMonth() + 1) +
    "월 " +
    date.getDate() +
    "일";

  return (
    <div className={`${styles.writeReview} ${pgStyle.pgMargin}`}>
      <div className={styles.subTitle}>
        <div>
          <span className={styles.tSigun}>시군명</span> 리뷰 작성
        </div>
        <BsChatSquareQuoteFill className={styles.subIcon} />
      </div>
      <form action="#" className={styles.writeForm}>
        <div className={styles.fName}>
          <TbBuildingFactory2 />
          (주)태영지엘에스
        </div>
        <div className={styles.formLine}>
          <RiText className={styles.icon} />
          :&nbsp;
          <input
            className={styles.rTitle}
            type="text"
            placeholder="제목을 입력해주세요"
          />
        </div>
        <div className={styles.formLine}>
          <MdOutlinePermIdentity className={styles.icon} />
          :&nbsp;
          <div className={styles.mId}>아이디</div>
        </div>
        <div className={styles.formLine}>
          <MdOutlineDateRange className={styles.icon} />
          :&nbsp;
          <div className={styles.rDate}>{today}</div>
        </div>
        <textarea
          className={styles.rCont}
          id=""
          cols="30"
          rows="10"
          maxLength="500"
          placeholder="내용을 입력해주세요"
        ></textarea>
        <div className={styles.btnLine}>
          <button className={styles.writeBtn}>
            작성하기&nbsp;
            <span className={styles.btnNext}>{">"}</span>
            <span className={styles.btnNext}>{">"}</span>
            <span className={styles.btnNext}>{">"}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default WriteReview;
