import React from "react";
import styles from "./questListPg.module.css";
import pStyle from "../../../css/page.module.css";

const QuestListPg = (props) => {
  const schName = "칠봉";
  const schKind = "초등학교";
  const teamKind = "16";
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
  const Questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div className={`${styles.questListPg} ${pStyle.default}`}>
      <div className={pStyle.title}>
        <div className="">
          {schName}
          {schKind}
          &nbsp;-&nbsp;
          {teamKind}&nbsp;조
        </div>
        <div className={styles.teamName}>
          {teamNameList.map((team) => {
            return <span className={styles.team}>{team}, </span>;
          })}
        </div>
      </div>
      <div className={pStyle.content}>
        <div className={pStyle.btnCont}>
          {Questions.map((quest) => {
            return <button className={pStyle.btnItem}>Q{quest}</button>;
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestListPg;
