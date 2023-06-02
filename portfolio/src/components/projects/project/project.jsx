import React from "react";
import styles from "./project.module.css";

const Project = ({ file, winWidth }) => {
  const { fileName, fileImg, fileLan, fileTool, fileLink, fileDate, fileInfo } =
    file;

  return (
    <div className={styles.project}>
      <p className={styles.title}>{fileName}</p>
      <p className={styles.link_wrap}>
        <b>사이트 링크:</b>
        <a className={styles.link} href={fileLink}>
          {fileLink}
        </a>
      </p>
      <div className={styles.cont}>
        <img
          className={styles.img}
          style={{ width: chkImgWidth(winWidth) }}
          src={fileImg}
          alt="프로젝트 이미지"
          loading="lazy"
        ></img>
        <div className={styles.projectTxt}>
          <p className={styles.lan}>
            <b>사용언어:</b> {fileLan}
          </p>
          <p className={styles.tool}>
            <b>개발환경:</b>
            <br /> {fileTool}
          </p>
          <p className={styles.tool}>
            <b>개발기간:</b> {fileDate}
          </p>
          <p className={styles.info}>
            <b>프로젝트 설명:</b>
            <br />
            {fileInfo}
          </p>
        </div>
      </div>
    </div>
  );
};

function chkImgWidth(winWidth) {
  if (winWidth > 1024) {
    return winWidth * 0.6;
  } else if (767 < winWidth && winWidth <= 1024) {
    return winWidth * 0.6;
  } else {
    return winWidth * 0.8;
  }
}

export default Project;
