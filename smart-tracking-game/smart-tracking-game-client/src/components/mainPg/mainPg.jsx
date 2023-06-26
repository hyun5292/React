import React from "react";
import { useRef } from "react";
import styles from "./mainPg.module.scss";
import pStyle from "../../css/page.module.scss";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const MainPg = ({ teamNum, member, setTeamInfo }) => {
  const tNumRef = useRef();
  const mberRef = useRef();
  const navigate = useNavigate();
  const Questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const handleTInfo = (event) => {
    event.preventDefault();
    setTeamInfo(tNumRef.current.value, mberRef.current.value);
  };

  const goQuestPg = (event, qNum) => {
    event.preventDefault();
    if (!teamNum) {
      alert("팀 정보를 먼저 등록해주세요!");
      return;
    } else {
      navigate("/quest", { state: { qNum: qNum } });
    }
  };

  return (
    <div className={`${styles.mainPg} ${pStyle.default}`}>
      <div className={styles.teamInfo}>
        <div className={styles.teamNum}>
          <span className={styles.school_name}>00초등학교</span>
          {teamNum ? (
            <span>{teamNum}</span>
          ) : (
            <select ref={tNumRef} className={styles.jo_select}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
          <span className={styles.jo_text}>조</span>
        </div>
        <div className={styles.teamName}>
          <span>
            팀<br />원
          </span>
          {member ? (
            <div className={styles.teamCont}>{member}</div>
          ) : (
            <div className={styles.teamInput}>
              <input
                ref={mberRef}
                type="text"
                placeholder="팀원1, 팀원2, 팀원3..."
              />
              <span className={styles.warn_text}>
                ※이름 틀려도 괜찮습니다!
                <br />
                대신 이상하게 작성하면 삭제됩니다!※
              </span>
            </div>
          )}
        </div>
        <button
          className={styles.upLoad_btn}
          onClick={teamNum ? () => alert("화이팅!!") : handleTInfo}
        >
          {teamNum ? <BsFillEmojiSmileFill /> : "등록"}
        </button>
      </div>
      <div className={styles.questCont}>
        {Questions.map((quest) => {
          return (
            <button
              className={styles.quest_btn}
              onClick={(event) => goQuestPg(event, { quest })}
            >
              Q{quest}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MainPg;
