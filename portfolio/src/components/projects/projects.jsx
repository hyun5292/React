import React, { useState } from "react";
import Title from "../title/title";
import styles from "./projects.module.css";
import sectStyle from ".././sect.module.css";
import Project from "./project/project";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { FaCircle, FaRegCircle } from "react-icons/fa";

const Projects = (props) => {
  const [pages, setPages] = useState([true, false, false]);

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

  const onChange = () => {
    const nowPg = pages.findIndex((pg) => pg === true);
    console.log("pages1 = ", pages);
    setPages((pages) => {
      const updated = { ...pages };
      updated[nowPg] = false;
      updated[nowPg + 1] = true;
      return updated;
    });
    console.log("pages2 = ", pages);
  };

  return (
    <div className={`${styles.projects} ${sectStyle.projects}`}>
      <Title
        txtTitle="Projects"
        txtSub="양 옆 버튼을 눌러주세요!"
        txtColor="projects"
      />
      <div className={styles.cont}>
        <MdNavigateBefore className={styles.arrow} onClick={onChange} />
        <Project />
        <MdNavigateNext className={styles.arrow} onClick={onChange} />
      </div>
      {pages.map((pg) =>
        pg ? (
          <FaCircle className={styles.circles} />
        ) : (
          <FaRegCircle className={styles.circles} />
        )
      )}
    </div>
  );
};

export default Projects;
