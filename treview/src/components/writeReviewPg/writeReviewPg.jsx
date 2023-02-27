import React, { useEffect, useState } from "react";
import styles from "./writeReviewPg.module.css";
import pgStyle from "../../css/page.module.css";
import { TbBuildingFactory2 } from "react-icons/tb";
import { RiText } from "react-icons/ri";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { MdOutlinePermIdentity, MdOutlineDateRange } from "react-icons/md";
import { useLocation } from "react-router-dom";

const WriteReview = (props) => {
  const location = useLocation("");
  const [fData, setFData] = useState(null);
  const date = new Date();
  const today =
    date.getFullYear() +
    "년 " +
    (date.getMonth() + 1) +
    "월 " +
    date.getDate() +
    "일";

  useEffect(() => {
    if (location.state) {
      setFData(location.state.fData);
    } else {
      alert("비정상적인 접근입니다!");
      window.history.go(-1);
    }
  }, [location.state]);

  return (
    <div className={`${styles.writeReview} ${pgStyle.pgPadding}`}>
      <div className={styles.subTitle}>
        <div>
          <span className={styles.tSigun}>{fData && fData.SIGUN_NM}</span> 리뷰
          작성
        </div>
        <BsChatSquareQuoteFill className={styles.subIcon} />
      </div>
      <form action="#" className={styles.writeForm}>
        <div className={styles.fName}>
          <TbBuildingFactory2 />
          {fData && fData.BIZPLC_NM}
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
