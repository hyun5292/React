import React from "react";
import styles from "./questPg.module.css";
import pStyle from "../../css/page.module.css";
import { MdAddPhotoAlternate, MdSubdirectoryArrowRight } from "react-icons/md";
import { BsFillClipboardCheckFill } from "react-icons/bs";

const QuestPg = (props) => {
  const teamName = ["팀원1", "팀원2", "팀원3", "팀원4", "팀원5", "팀원6"];

  return (
    <div className={`${styles.questPg} ${pStyle.default}`}>
      <div className={styles.teamInfo}>
        <span className={styles.teamJo}>00초등학교 - 16 조</span>
        <span className={styles.teamName}>
          팀원:{" "}
          {teamName.map((member) => {
            return <span>{member}, </span>;
          })}
        </span>
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
            width="260px"
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
