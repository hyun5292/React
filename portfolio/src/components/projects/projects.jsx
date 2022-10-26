import React from "react";
import Title from "../title/title";
import styles from "./projects.module.css";
import sectStyle from ".././sect.module.css";
import Project from "./project/project";
import { GrPrevious, GrNext } from "react-icons/gr";

const Projects = (props) => {
  const files = [
    {
      fileName: "프로젝트1",
      fileImg: "/images/selfie.png",
      fileInfo:
        "프로젝트 설명이 길어야하니까 어쩔 수 없이 이렇게 길게 설명을 한 번 써보기는 하는데 얼마나 길게 써질지는 모르겠네",
    },
    {
      fileName: "프로젝트2",
      fileImg: "/images/selfie.png",
      fileInfo:
        "프로젝트 설명이 길어야하니까 어쩔 수 없이 이렇게 길게 설명을 한 번 써보기는 하는데 얼마나 길게 써질지는 모르겠네",
    },
  ];

  return (
    <div className={`${styles.projects} ${sectStyle.projects}`}>
      <Title txtTitle="Projects" txtColor="grey" />
      <div className={styles.cont}>
        <GrPrevious className={styles.arrow} />
        <Project />
        <GrNext className={styles.arrow} />
      </div>
    </div>
  );
};

export default Projects;
