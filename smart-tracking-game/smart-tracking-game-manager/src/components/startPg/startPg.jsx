import React from "react";
import styles from "./startPg.module.css";
import pStyle from "../../css/page.module.css";
import { FaClipboardCheck, FaMapMarkedAlt } from "react-icons/fa";

const StartPg = (props) => {
  return (
    <div className={`${styles.startPg} ${pStyle.default}`}>
      <div className={styles.top_btns}>
        <button className={styles.answer_btn}>
          <FaClipboardCheck />
        </button>
        <button className={styles.map_btn}>
          <FaMapMarkedAlt />
        </button>
      </div>
      <div className={styles.content}>
        <div className={styles.schoolKind}>
          <input
            className={styles.schName}
            type="text"
            placeholder="학교이름"
          />
          <select name="schKind" id="schKind">
            <option value="초등" selected>
              초등
            </option>
            <option value="중">중</option>
            <option value="고등">고등</option>
          </select>
          <span>학교</span>
        </div>
        <div className={styles.teamNum}>
          <span>총</span>
          <select name="teamNum" id="teamNum">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <span>조</span>
        </div>
        <button className={styles.start_btn}>시작하기</button>
      </div>
    </div>
  );
};

export default StartPg;
