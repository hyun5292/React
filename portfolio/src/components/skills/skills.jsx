import React from "react";
import Title from "../title/title";
import styles from "./skills.module.css";
import sectStyle from ".././sect.module.css";

const front_icons = [
  {
    kind: "html",
    style: { backgroundPosition: "0px 0px" },
  },
  {
    kind: "css",
    style: { backgroundPosition: "-80px 0px" },
  },
  {
    kind: "js",
    style: { backgroundPosition: "-160px 0px" },
  },
  {
    kind: "jquery",
    style: { backgroundPosition: "-240px 0px" },
  },
  {
    kind: "react",
    style: { backgroundPosition: "-320px 0px" },
  },
  {
    kind: "postcss",
    style: { backgroundPosition: "-400px 0px" },
  },
];
const back_icons = ["spring", "mariadb"];
const etc_icons = ["cert", "vscode"];

const Skills = (props) => (
  <div className={`${styles.skills} ${sectStyle.skills}`}>
    <div className={styles.title}>
      <Title txtTitle="i can do these" txtColor="grey" />
      <p className={styles.sub}>각 아이콘 위에 마우스를 올려주세요!</p>
    </div>
    <div className={styles.cont}>
      <div className={`${styles.block} ${styles.front}`}>
        <div className={styles.block_title}>front end</div>
        <div className={styles.icon_wrap}>
          {front_icons.map((icon) => {
            return (
              <div
                className={styles.icon}
                key={icon.kind}
                style={icon.style}
              ></div>
            );
          })}
        </div>
      </div>
      <div className={`${styles.block} ${styles.back}`}>
        <div className={styles.block_title}>back end</div>
        <div className={styles.icon_wrap}></div>
      </div>
      <div className={`${styles.block} ${styles.etc}`}>
        <div className={styles.block_title}>etc...</div>
        <div className={styles.icon_wrap}></div>
      </div>
    </div>
  </div>
);

export default Skills;
