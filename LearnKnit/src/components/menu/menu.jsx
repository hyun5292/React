import React from "react";
import styles from "./menu.module.css";

const Menu = ({ stepsData, changeStep }) => {
  const handleClick = (event, kind, step) => {
    event.preventDefault();
    const steps = step.split("-");
    changeStep(kind, steps);
  };

  return (
    <div className={styles.menu}>
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <span className={styles.warnning}>
            ※영상이 뜨는데 다소 느릴 수 있습니다!※
          </span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.warnning}>
            ※하루 이용 가능한 영상 수가 제한되어 있습니다!※
          </span>
        </div>
        <div className={styles.infoItem}>
          <span>- 제작자: </span>
          <a href="https://sudol5292.netlify.app/">박수현</a>
        </div>
        <div className={styles.infoItem}>
          <span>- 사용 폰트: 한림고딕체</span>
        </div>
      </div>
      <div className={styles.menuCont}>
        {Object.entries(stepsData).map((steps) => {
          return (
            <ul className={styles.menuList} key={steps[0]}>
              <li className={styles.menuTitle}>{steps[0]}</li>
              {steps[1].map((data) => {
                return (
                  <li
                    className={styles.menuItem}
                    key={data.stepId}
                    onClick={(event) =>
                      handleClick(event, steps[0], data.stepId)
                    }
                  >
                    #{data.stepId}&nbsp;{data.stepTitle}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
