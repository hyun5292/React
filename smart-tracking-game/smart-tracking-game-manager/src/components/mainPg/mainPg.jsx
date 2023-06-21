import React from "react";
import styles from "./mainPg.module.css";
import pStyle from "../../css/page.module.css";
import { FaClipboardCheck, FaPowerOff } from "react-icons/fa";

const MainPg = (props) => {
  const schName = "칠봉";
  const schKind = "초등학교";
  const Teams = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div className={`${styles.mainPg} ${pStyle.default}`}>
      <div className={styles.top_btns}>
        <button className={styles.answer_btn}>
          <FaClipboardCheck />
        </button>
        <button className={styles.reset_btn}>
          <FaPowerOff />
        </button>
      </div>
      <div className={pStyle.title}>
        {schName}
        {schKind}
      </div>
      <div className={pStyle.content}>
        <div className={pStyle.btnCont}>
          {Teams.map((team) => {
            return <button className={pStyle.btnItem}>{team}조</button>;
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPg;
