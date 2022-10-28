import React from "react";
import styles from "./project.module.css";

const Project = ({ file }) => {
  const { fileName, fileImg, fileInfo } = file;
  return (
    <div className={styles.project}>
      <p className={styles.title}>{fileName}</p>
      <div className={styles.cont}>
        <img className={styles.img} src={fileImg} alt="프로젝트 이미지"></img>
        <p>{fileInfo}</p>
      </div>
    </div>
  );
};

export default Project;
