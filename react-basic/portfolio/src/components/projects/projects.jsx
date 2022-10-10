import React from "react";
import Title from "../title/title";
import styles from "./projects.module.css";
import sectStyle from ".././sect.module.css";

const Projects = (props) => (
  <div className={`${styles.projects} ${sectStyle.projects}`}>
    <Title txtTitle="Projects" />
    <h1>글씨입니다.</h1>
  </div>
);

export default Projects;
