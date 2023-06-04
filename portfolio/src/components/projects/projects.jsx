import React, { useRef, useState } from "react";
import Title from "../title/title";
import styles from "./projects.module.css";
import sectStyle from ".././sect.module.css";
import Project from "./project/project";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { FaCircle, FaRegCircle } from "react-icons/fa";

const Projects = ({ files }) => {
  const projectRef = useRef();
  const [projNum, setProjNum] = useState(0);

  const moveBefore = (event) => {
    event.preventDefault();
    const beforeProj = projNum - 1;
    if (beforeProj < 0) setProjNum(0);
    else {
      setProjNum(beforeProj);
      projectRef.current.style =
        "transform: translateX(-" + beforeProj * 100 + "vw)";
    }
  };
  const moveAfter = (event) => {
    event.preventDefault();
    const nextProj = projNum + 1;
    if (nextProj >= files.length) setProjNum(files.length - 1);
    else {
      setProjNum(nextProj);
      projectRef.current.style =
        "transform: translateX(-" + nextProj * 100 + "vw)";
    }
  };

  const onMoveProject = (event, projectNum) => {
    event.preventDefault();
    setProjNum(projectNum);
    projectRef.current.style =
      "transform: translateX(-" + projectNum * 100 + "vw)";
  };

  return (
    <div className={`${styles.projects} ${sectStyle.projects}`}>
      <Title
        txtTitle="Projects"
        txtSub="양 옆 버튼을 눌러주세요!"
        txtColor="projects"
      />
      <div className={styles.cont}>
        <button
          disabled={projNum === 0 ? true : false}
          className={styles.move_btn}
          onClick={moveBefore}
        >
          <MdNavigateBefore
            className={
              projNum === 0
                ? `${styles.arrow} ${styles.arrow_disabled}`
                : `${styles.arrow}`
            }
          />
        </button>
        <div ref={projectRef} className={styles.projectList}>
          {files &&
            files.map((file) => {
              return (
                <div key={file.fileNum} className={styles.project}>
                  <Project file={file} />
                </div>
              );
            })}
        </div>
        <div className={styles.dotCont}>
          {files &&
            files.map((file) => {
              if (projNum + 1 === file.fileNum) {
                return (
                  <FaCircle
                    key={file.fileNum}
                    className={`${styles.dot_btn} ${styles.dot}`}
                  />
                );
              } else {
                return (
                  <button
                    key={file.fileNum}
                    className={styles.dot_btn}
                    onClick={(event) => onMoveProject(event, file.fileNum - 1)}
                  >
                    <FaRegCircle className={styles.dot} />
                  </button>
                );
              }
            })}
        </div>
        <button
          disabled={projNum === files.length - 1 ? true : false}
          className={styles.move_btn}
          onClick={moveAfter}
        >
          <MdNavigateNext
            className={
              projNum === files.length - 1
                ? `${styles.arrow} ${styles.arrow_disabled}`
                : `${styles.arrow}`
            }
          />
        </button>
      </div>
    </div>
  );
};

export default Projects;
