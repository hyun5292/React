import React from "react";
import styles from "./questPg.module.scss";
import pStyle from "../../css/page.module.scss";
import { MdAddPhotoAlternate, MdSubdirectoryArrowRight } from "react-icons/md";
import { BsFillClipboardCheckFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const QuestPg = ({ teamNum, member }) => {
  const location = useLocation();
  const [questNum, setQuestNum] = useState(0);

  useEffect(() => {
    if (location.state) {
      setQuestNum(location.state.qNum);
    }
  }, [location.state]);

  return (
    <div className={`${styles.questPg} ${pStyle.default}`}>
      <div className={styles.teamInfo}>
        <span className={styles.teamJo}>00초등학교 - {teamNum} 조</span>
        <div className={styles.teamName}>
          <span>
            팀<br />원
          </span>
          <div>{member}</div>
        </div>
      </div>
      <div className={styles.answerCont}>
        <span className={styles.questNum}>1번</span>
        <textarea
          className={styles.questAnswer}
          type="text"
          placeholder="해석한 내용을 입력해주세요"
        />
        <button className={styles.upLoad_btn}>
          <BsFillClipboardCheckFill />
        </button>
        <button className={styles.photo_btn}>
          <MdAddPhotoAlternate />
        </button>
        <div className={styles.photoCont}>
          <img
            className={styles.photoExample}
            src="./images/example.jpg"
            alt="예시 사진"
            width="100%"
            height="auto"
          />
          <img className={styles.photoAnswer} src="" alt="촬영된 사진" />
        </div>
        <div className={styles.comment_icon}>
          <MdSubdirectoryArrowRight />
        </div>
        <textarea
          className={styles.comment}
          disabled
          type="text"
          placeholder="Comment..."
        />
      </div>
    </div>
  );
};

export default QuestPg;
