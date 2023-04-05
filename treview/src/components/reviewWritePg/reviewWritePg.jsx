import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./reviewWritePg.module.css";
import pgStyle from "../../css/page.module.css";
import { TbBuildingFactory2 } from "react-icons/tb";
import { RiText } from "react-icons/ri";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { MdOutlinePermIdentity, MdOutlineDateRange } from "react-icons/md";

const ReviewWrite = ({ uData, factoryDB, revService }) => {
  const navigate = useNavigate();
  const location = useLocation("");
  const titleRef = useRef();
  const contentRef = useRef();
  const [fData, setFData] = useState([]);
  const [today, setToday] = useState("");

  const onChkEmpty = () => {
    const rData = {
      U_ID: uData.uEmail,
      F_ID:
        fData.F_ID ||
        (fData.SIGUN_NM + fData.REFINE_ROADNM_ADDR).replace(
          /[\s@-^$*+?.()|[\]{}:]/g,
          ""
        ),
      R_ID: (
        fData.BIZPLC_NM +
        uData.uDisplayName +
        today.replace(/[^0-9]/g, "")
      ).replace(/[\s@-^$*+?.()|[\]{}:]/g, ""),
      R_DATE: today,
      R_TITLE: titleRef.current.value,
      R_CONT: contentRef.current.value,
      R_IMG: uData.uProfile,
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
          navigate("/review", {
            state: {
              fData: { SIGUN_NM: fData.SIGUN_NM, BIZPLC_NM: fData.BIZPLC_NM },
            },
          });
        }
      });
    }
  };

  const onModifyReview = (event) => {
    event.preventDefault();
    const checkData = onChkEmpty();
    const newData = {
      ...checkData,
      R_ID: fData.R_ID,
      SIGUN_NM: fData.SIGUN_NM,
      BIZPLC_NM: fData.BIZPLC_NM,
    };

    if (newData) {
      revService.modifyReview(newData).then((result) => {
        if (result) {
          navigate("/review", {
            state: {
              fData: { SIGUN_NM: fData.SIGUN_NM, BIZPLC_NM: fData.BIZPLC_NM },
            },
          });
        }
      });
    }
  };

  const onDeleteReview = (event) => {
    event.preventDefault();

    if (window.confirm("삭제하시겠습니까?")) {
      revService.removeReview(fData).then((result) => {
        if (result) {
          navigate("/review", {
            state: {
              fData: { SIGUN_NM: fData.SIGUN_NM, BIZPLC_NM: fData.BIZPLC_NM },
            },
          });
        }
      });
    }
  };

  useEffect(() => {
    setFData([]);
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
    setToday(now);

    if (location.state.writeFData) {
      setFData(location.state.writeFData);
    } else if (location.state.modifyFData) {
      setFData(location.state.modifyFData);
    } else {
      setFData([]);
      alert("비정상적인 접근입니다!");
      window.history.go(-1);
    }
  }, [fData.U_ID, factoryDB, location.state, uData.U_ID]);

  return (
    <div className={`${styles.writeReview} ${pgStyle.pgPadding}`}>
      <div className={styles.subTitle}>
        <div>
          <span className={styles.tSigun}>{fData.SIGUN_NM}</span> 리뷰 작성
        </div>
        <BsChatSquareQuoteFill className={styles.subIcon} />
      </div>
      <form action="#" className={styles.writeForm}>
        <div className={styles.fName}>
          <TbBuildingFactory2 />
          {fData.BIZPLC_NM}
        </div>
        <div className={styles.formLine}>
          <RiText className={styles.icon} />
          :&nbsp;
          <input
            disabled={fData.U_ID === uData.uEmail ? false : true}
            ref={titleRef}
            className={styles.rTitle}
            type="text"
            placeholder="제목을 입력해주세요"
            defaultValue={fData.R_TITLE ? fData.R_TITLE : ""}
          />
        </div>
        <div className={styles.formLine}>
          <MdOutlinePermIdentity className={styles.icon} />
          :&nbsp;
          <div className={styles.mId}>{uData != null && uData.uEmail}</div>
        </div>
        <div className={styles.formLine}>
          <MdOutlineDateRange className={styles.icon} />
          :&nbsp;
          <div className={styles.rDate}>
            {location.state.writeFData ? today : fData.R_DATE}
          </div>
        </div>
        <textarea
          disabled={fData.U_ID === uData.uEmail ? false : true}
          ref={contentRef}
          className={styles.rCont}
          cols="30"
          rows="10"
          maxLength="500"
          placeholder="내용을 입력해주세요"
          defaultValue={fData.R_CONT ? fData.R_CONT : ""}
        ></textarea>
        <div className={styles.btnLine}>
          {location.state.writeFData ? (
            <button className={styles.writeBtn} onClick={onWriteReview}>
              <span>작성하기</span>
              &nbsp;
              <span className={styles.btnNext}>{">"}</span>
              <span className={styles.btnNext}>{">"}</span>
              <span className={styles.btnNext}>{">"}</span>
            </button>
          ) : (
            ""
          )}
          {fData.U_ID === uData.uEmail && location.state.modifyFData ? (
            <>
              <button
                className={`${styles.writeBtn} ${styles.modifyBtn}`}
                onClick={onModifyReview}
              >
                수정하기 &nbsp;
                <span className={styles.btnNext}>{">"}</span>
                <span className={styles.btnNext}>{">"}</span>
                <span className={styles.btnNext}>{">"}</span>
              </button>
              <button
                className={`${styles.writeBtn} ${styles.deleteBtn}`}
                onClick={onDeleteReview}
              >
                삭제하기 &nbsp;
                <span className={styles.btnNext}>{">"}</span>
                <span className={styles.btnNext}>{">"}</span>
                <span className={styles.btnNext}>{">"}</span>
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};

export default ReviewWrite;
