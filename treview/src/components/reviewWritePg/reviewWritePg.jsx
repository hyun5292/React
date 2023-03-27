import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./reviewWritePg.module.css";
import pgStyle from "../../css/page.module.css";
import { TbBuildingFactory2 } from "react-icons/tb";
import { RiText } from "react-icons/ri";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { MdOutlinePermIdentity, MdOutlineDateRange } from "react-icons/md";

const ReviewWrite = ({ uId, factoryDB, revService }) => {
  const navigate = useNavigate();
  const location = useLocation("");
  const titleRef = useRef();
  const contentRef = useRef();
  const [fData, setFData] = useState(null);
  const date = new Date();
  const today =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const dateForId =
    date.getFullYear().toString() +
    (date.getMonth() + 1).toString() +
    date.getDate().toString() +
    date.getHours().toString() +
    date.getMinutes().toString() +
    date.getSeconds().toString();

  const onChkEmpty = () => {
    const rData = {
      uId: uId,
      fId: fData.F_ID,
      rId: (fData.BIZPLC_NM + uId + dateForId).replace(
        /[@-^$*+?.()|[\]{}]/g,
        ""
      ),
      rDate: today,
      rTitle: titleRef.current.value,
      rContent: contentRef.current.value,
    };

    if (titleRef.current.value === "") {
      alert("제목을 입력해주세요!");
      titleRef.current.focus();
    } else if (contentRef.current.value === "") {
      alert("내용을 입력해주세요!");
      contentRef.current.focus();
    } else return rData;
    return false;
  };

  const onWriteReview = (event) => {
    event.preventDefault();
    const newData = onChkEmpty();
    if (newData) {
      revService.writeReview(newData, fData).then((result) => {
        if (result) {
          navigate("/review", { state: { fData } });
        } else {
          window.location.reload();
        }
      });
    }
  };

  useEffect(() => {
    if (location.state) {
      const query = {
        sigun: location.state.fData.SIGUN_NM,
        fName: location.state.fData.BIZPLC_NM,
      };

      factoryDB.getSearchedList(query).then((result) => {
        setFData(result[0]);
      });
    } else {
      alert("비정상적인 접근입니다!");
      window.history.go(-1);
    }
  }, [factoryDB, location.state]);

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
            ref={titleRef}
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
          ref={contentRef}
          className={styles.rCont}
          id=""
          cols="30"
          rows="10"
          maxLength="500"
          placeholder="내용을 입력해주세요"
        ></textarea>
        <div className={styles.btnLine}>
          <button className={styles.writeBtn} onClick={onWriteReview}>
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

export default ReviewWrite;
