import React, { useRef, useState } from "react";
import Title from "../title/title";
import styles from "./projects.module.css";
import sectStyle from ".././sect.module.css";
import Project from "./project/project";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { useEffect } from "react";

const Projects = (props) => {
  const pageRef = useRef();
  const [pageCnt, setPageCnt] = useState(1);
  const [winSize, setWinSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const files = [
    {
      fileNum: "1",
      fileName: "포트폴리오",
      fileImg: "/images/example1.png",
      fileLan: "react",
      fileTool: "visual studio",
      fileLink: "https://sudol5292.netlify.app/",
      fileInfo:
        "프로젝트 설명이 길어야하니까 어쩔 수 없이 이렇게 길게 설명을 한 번 써보기는 하는데 얼마나 길게 써질지는 모르겠네",
    },
    {
      fileNum: "2",
      fileName: "포트폴리오",
      fileImg: "/images/example2.png",
      fileLan: "react",
      fileTool: "visual studio",
      fileLink: "https://sudol5292.netlify.app/",
      fileInfo:
        "프로젝트 설명이 길어야하니까 어쩔 수 없이 이렇게 길게 설명을 한 번 써보기는 하는데 얼마나 길게 써질지는 모르겠네",
    },
    {
      fileNum: "3",
      fileName: "포트폴리오",
      fileImg: "/images/example3.png",
      fileLan: "react",
      fileTool: "visual studio",
      fileLink: "https://sudol5292.netlify.app/",
      fileInfo:
        "프로젝트 설명이 길어야하니까 어쩔 수 없이 이렇게 길게 설명을 한 번 써보기는 하는데 얼마나 길게 써질지는 모르겠네",
    },
  ];

  const handleResize = () => {
    setPageCnt(1);
    pageRef.current.style.transform = "translateX(0)";
    pageRef.current.style.transition = "transform 0.5s ease";
    setWinSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const handleNextPg = () => {
    const nowPg = pageCnt;
    if (nowPg < files.length) {
      setPageCnt(nowPg + 1);
      pageRef.current.style.transform = `translateX(-${
        winSize.width * nowPg
      }px)`;
      pageRef.current.style.transition = "transform 0.5s ease";
    }
  };
  const handlePrevPg = () => {
    const nowPg = pageCnt;
    if (nowPg > 1) {
      setPageCnt(nowPg - 1);
      pageRef.current.style.transform = `translateX(${
        winSize.width * (files.length - 1 - nowPg)
      }px)`;
      pageRef.current.style.transition = "transform 0.5s ease";
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${styles.projects} ${sectStyle.projects}`}>
      <Title
        txtTitle="Projects"
        txtSub="양 옆 버튼을 눌러주세요!"
        txtColor="projects"
      />
      <div className={styles.cont}>
        <div
          ref={pageRef}
          className={styles.proList}
          style={{ width: window.innerWidth * files.length }}
        >
          {files &&
            files.map((file) => {
              return (
                <div className={styles.project}>
                  <Project
                    key={file.fileNum}
                    file={file}
                    winWidth={winSize.width}
                  />
                </div>
              );
            })}
        </div>
        <MdNavigateBefore
          onClick={handlePrevPg}
          className={`${styles.arrow} ${styles.prev} ${changeArrow(
            "prev",
            pageCnt
          )}`}
        />
        <MdNavigateNext
          onClick={handleNextPg}
          className={`${styles.arrow} ${styles.next} ${changeArrow(
            "next",
            pageCnt,
            files.length
          )}`}
        />
      </div>
      {files &&
        files.map((file) =>
          pageCnt == file.fileNum ? (
            <FaCircle className={styles.circles} />
          ) : (
            <FaRegCircle className={styles.circles} />
          )
        )}
    </div>
  );
};

function changeArrow(kind, pgCnt, final) {
  if (kind === "prev" && pgCnt === 1) {
    return styles.hoverArrow;
  } else if (kind === "next" && pgCnt === final) {
    return styles.hoverArrow;
  } else {
    return;
  }
}

export default Projects;
