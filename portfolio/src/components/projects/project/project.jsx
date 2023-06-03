import React from "react";
import styles from "./project.module.css";

const Project = ({ file, winWidth }) => {
  const { fileName, fileImg, fileLan, fileTool, fileLink, fileDate, fileInfo } =
    file;

  return (
    <div className={styles.project}>
      <h1>{file && fileName}</h1>
    </div>
  );
};

export default Project;
