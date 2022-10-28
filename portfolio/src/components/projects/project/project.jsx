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
          <p className={styles.lan}>사용언어: {fileLan}</p>
          <p className={styles.tool}>개발환경: {fileTool}</p>
          <p className={styles.link_wrap}>
            사이트 링크:
            <br />
            <a className={styles.link} href={fileLink}>
              {fileLink}
            </a>
          </p>
          <p className={styles.info}>
            프로젝트 설명:
            <br />
            {fileInfo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
