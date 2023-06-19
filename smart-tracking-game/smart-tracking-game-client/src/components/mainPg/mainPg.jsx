import React from "react";
import styles from "./mainPg.module.css";
import pStyle from "../../css/page.module.css";

const MainPg = (props) => {
  const Questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div className={`${styles.mainPg} ${pStyle.default}`}>
      <div className={styles.teamInfo}>
        <div className={styles.teamNum}>
          <span className={styles.school_name}>00초등학교</span>
          <select className={styles.jo_select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <span className={styles.jo_text}>조</span>
        </div>
        <div className={styles.teamName}>
          <span>팀원</span>
          <input type="text" placeholder="팀원1, 팀원2, 팀원3..." />
        </div>
        <button className={styles.upLoad_btn}>등록</button>
      </div>
      <div className={styles.questCont}>
        {Questions.map((quest) => {
          return <button className={styles.quest_btn}>Q{quest}</button>;
        })}
      </div>
    </div>
  );
};

export default MainPg;
