import React from "react";
import Title from "../title/title";
import styles from "./welcome.module.css";

const Welcome = (props) => (
  <div className={styles.welcome}>
    <div className={styles.card}>
      <Title txtTitle="Welcome" />
      <div className={styles.cont}>
        <img className={styles.selfie} src="/images/selfie.png" alt="사진" />
        <div className={styles.explain}>
          <div className={styles.intro}>
            <span>박수현</span>
            <p>
              안녕하세요
              <br />
              즐거움을 찾는 개발자 박수현입니다
            </p>
            <p>
              저의 좌우명은 '즐거움'입니다
              <br />
              어떤 일이든 즐기면서 할 줄 알고 끊임없이 공부하는 개발자가
              되겠습니다!
            </p>
          </div>
          <div className={styles.info_wrap}>
            <ul className={styles.info_list}>
              <li className={styles.info_item}>
                <i className={styles.info_icon}></i>
                <div className={styles.info}>
                  <div className={styles.info_text}>생년월일</div>
                  <div className={styles.info_data}>1998.05.12</div>
                </div>
              </li>
              <li className={styles.info_item}>
                <i className={styles.info_icon}></i>
                <div className={styles.info}>
                  <div className={styles.info_text}>전화번호</div>
                  <div className={styles.info_data}>010-9944-5292</div>
                </div>
              </li>
              <li className={styles.info_item}>
                <i className={styles.info_icon}></i>
                <div className={styles.info}>
                  <div className={styles.info_text}>이메일</div>
                  <div className={styles.info_data}>tytyjacob@naver.com</div>
                </div>
              </li>
              <li className={styles.info_item}>
                <i className={styles.info_icon}></i>
                <div className={styles.info}>
                  <div className={styles.info_text}>Git</div>
                  <div className={styles.info_data}>
                    <a href="https://github.com/hyun5292">
                      <i></i>
                      https://github.com/hyun5292
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Welcome;
