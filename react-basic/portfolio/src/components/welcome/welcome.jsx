import React from "react";
import Title from "../title/title";
import styles from "./welcome.module.css";
import sectStyle from ".././sect.module.css";
import {
  faAt,
  faCalendar,
  faMobileAlt,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Welcome = (props) => (
  <div className={`${styles.welcome} ${sectStyle.welcome}`}>
    <div className={styles.card}>
      <div className={styles.title}>
        <Title txtTitle="contact me" chkMb={false} />
        <p className={styles.sub}>깃허브 링크를 클릭해주세요!</p>
      </div>
      <div className={styles.card_border}>
        <div className={styles.cont}>
          <img className={styles.selfie} src="/images/selfie.png" alt="사진" />
          <div className={styles.line}></div>
          <div className={styles.explain}>
            <div className={styles.intro}>
              <p className={styles.intro_title}>
                안녕하세요
                <br />
                <span className={styles.funny}>즐거움</span>을 찾는 개발자{" "}
                <span className={styles.myName}>박수현</span>입니다.
              </p>
              <p className={styles.intro_sect}>
                &nbsp;저의 좌우명은 '즐거움'입니다
                <br />
                어떤 일이든 즐기면서 할 줄 알고
                <br />
                끊임없이 공부하는 개발자가 되겠습니다!
              </p>
            </div>
            <div className={styles.info_wrap}>
              <ul className={styles.info_list}>
                <li className={styles.info_item}>
                  <div className={styles.info}>
                    <div className={styles.info_icon}>
                      <FontAwesomeIcon icon={faCalendar} />
                    </div>
                    <div className={styles.info_text}>생년월일</div>
                  </div>
                  <div className={styles.data}>1998.05.12</div>
                </li>
                <li className={styles.info_item}>
                  <div className={styles.info}>
                    <div className={styles.info_icon}>
                      <FontAwesomeIcon icon={faMobileAlt} />
                    </div>
                    <div className={styles.info_text}>전화번호</div>
                  </div>
                  <div className={styles.data}>010-9944-5292</div>
                </li>
                <li className={styles.info_item}>
                  <div className={styles.info}>
                    <div className={styles.info_icon}>
                      <FontAwesomeIcon icon={faAt} />
                    </div>
                    <div className={styles.info_text}>이메일</div>
                  </div>
                  <div className={styles.data}>tytyjacob@naver.com</div>
                </li>
                <li className={styles.info_item}>
                  <div className={styles.info}>
                    <div className={styles.info_icon}>
                      <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <div className={styles.info_text}>Git</div>
                  </div>
                  <div className={styles.data}>
                    <a
                      className={styles.gitLink}
                      href="https://github.com/hyun5292"
                    >
                      <FontAwesomeIcon icon={faLink} />
                      https://github.com/hyun5292
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Welcome;
