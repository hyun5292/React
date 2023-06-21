import React from "react";
import styles from "./answerPg.module.css";
import pStyle from "../../../css/page.module.css";

const AnswerPg = (props) => {
  const AnswerList = [
    { qNum: 1, qAnswer: "1번 정답" },
    { qNum: 2, qAnswer: "2번 정답" },
    { qNum: 3, qAnswer: "3번 정답" },
    { qNum: 4, qAnswer: "4번 정답" },
    { qNum: 5, qAnswer: "5번 정답" },
    { qNum: 6, qAnswer: "6번 정답" },
  ];

  return (
    <div className={`${styles.answerPg} ${pStyle.default}`}>
      <div className={pStyle.title}>
        <span>정답</span>
      </div>
      <div className={pStyle.content}>
        <div className={styles.answerCont}>
          {AnswerList.map((answer) => {
            return (
              <div className={styles.answerItem}>
                <span>{answer.qNum}번</span>
                <input type="text" defaultValue={answer.qAnswer} />
              </div>
            );
          })}
        </div>
        <div className={styles.answer_btns}>
          <button>초기화</button>
          <button>저장하기</button>
        </div>
      </div>
    </div>
  );
};

export default AnswerPg;
