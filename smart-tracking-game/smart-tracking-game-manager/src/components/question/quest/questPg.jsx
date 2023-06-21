import React from "react";
import styles from "./questPg.module.css";
import pStyle from "../../../css/page.module.css";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import { FaCheckCircle, FaQuestion } from "react-icons/fa";

const QuestPg = (props) => {
  const teamNameList = [
    "팀원1",
    "팀원2",
    "팀원3",
    "팀원4",
    "팀원5",
    "팀원6",
    "팀원7",
    "팀원8",
    "팀원9",
    "팀원10",
    "팀원11",
    "팀원12",
    "팀원13",
    "팀원14",
    "팀원15",
    "팀원16",
  ];
  return (
    <div className={`${styles.questPg} ${pStyle.default}`}>
      <div className={styles.teamInfo}>
        <span className={styles.teamJo}>00초등학교 - 16 조</span>
        <div className={styles.teamName}>
          {teamNameList.map((team) => {
            return <span className={styles.team}>{team}, </span>;
          })}
        </div>
      </div>
      <div className={styles.answerCont}>
        <span className={styles.questNum}>1번</span>
        <textarea
          disabled
          className={styles.questAnswer}
          type="text"
          placeholder="해석한 내용입니다."
        />
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
          type="text"
          placeholder="Comment..."
        />
        <div className={styles.bottom_btn}>
          <button className={styles.circle_btn}>
            <FaCheckCircle />
          </button>
          <button className={styles.wrong_btn}>
            <FaQuestion />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestPg;
