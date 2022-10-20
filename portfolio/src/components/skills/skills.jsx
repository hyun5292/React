import React from "react";
import Title from "../title/title";
import styles from "./skills.module.css";
import sectStyle from ".././sect.module.css";

const Skills = (props) => (
  <div className={`${styles.skills} ${sectStyle.skills}`}>
    <div className={styles.title}>
      <Title txtTitle="skills" txtColor="grey" />
      <p className={styles.sub}>각 아이콘 위에 마우스를 올려주세요!</p>
    </div>
  </div>
);

export default Skills;
