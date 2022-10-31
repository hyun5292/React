import React from "react";
import styles from "./project.module.css";

const Project = ({ file }) => {
  const { fileName, fileImg, fileLan, fileTool, fileLink, fileInfo } = file;
  return (
    <div className={styles.project}>
      <p className={styles.title}>{fileName}</p>
      <div className={styles.cont}>
        <img className={styles.img} src={fileImg} alt="프로젝트 이미지"></img>
        <div className={styles.projectTxt}>
          <p className={styles.lan}>
            <b>사용언어:</b> {fileLan}
          </p>
          <p className={styles.tool}>
            <b>개발환경:</b> {fileTool}
          </p>
          <p className={styles.link_wrap}>
            <b>사이트 링크:</b>
            <br />
            <a className={styles.link} href={fileLink}>
              {fileLink}
            </a>
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

export default Project;
