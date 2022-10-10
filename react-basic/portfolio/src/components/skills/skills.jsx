import React from "react";
import Title from "../title/title";
import styles from "./skills.module.css";
import sectStyle from ".././sect.module.css";

const Skills = (props) => (
  <div className={`${styles.skills} ${sectStyle.skills}`}>
    <Title txtTitle="skills" chkMb />
    <div className="">글씨입니다.</div>
  </div>
);

export default Skills;
