import React, { useRef } from "react";
import styles from "./project.module.css";
import { HiChevronDoubleDown } from "react-icons/hi";

const Project = ({ file }) => {
  const imgContRef = useRef();
  const explainRef = useRef();
  const { fileName, fileImg, fileLan, fileTool, fileLink, fileDate, fileInfo } =
    file;

  const offExplain = () => {
    explainRef.current.style = "display: none";
    imgContRef.current.style = "overflow-y: scroll";
  };

  return (
    <div className={styles.project}>
      <div className={styles.titleCont}>
        <p className={styles.title}>{file && fileName}</p>
        <p className={styles.fileLink}>
          <b>사이트 링크:</b>&nbsp;
          <a href={fileLink}>{fileLink}</a>
        </p>
      </div>
      <div ref={imgContRef} className={styles.imgCont} onClick={offExplain}>
        <div ref={explainRef} className={styles.explain}>
          <p>이미지를 클릭 후 스크롤 해주세요</p>
          <HiChevronDoubleDown className={styles.explain_icon} />
        </div>
        {fileImg &&
          fileImg.map((imgLink, idk) => {
            return (
              <div key={idk} className={styles.imgItem}>
                <img
                  width="100%"
                  src={imgLink}
                  alt="Treview 사이트"
                  loading="lazy"
                />
              </div>
            );
          })}
      </div>
      <div className={styles.infoCont}>
        <p className={styles.infoItem}>
          <b>사용언어:</b>&nbsp;{fileLan}
        </p>
        <p className={styles.infoItem}>
          <b>개발환경:</b>
          <br />
          {fileTool}
        </p>
        <p className={styles.infoItem}>
          <b>개발기간:</b>&nbsp;{fileDate}
        </p>
        <p className={styles.infoItem}>
          <b>사이트 설명:</b>
          <br />
          {fileInfo}
        </p>
      </div>
    </div>
  );
};

export default Project;
