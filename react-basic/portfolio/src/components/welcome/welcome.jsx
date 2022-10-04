import React from "react";
import Title from "../title/title";
import styles from "./welcome.module.css";

const Welcome = (props) => (
  <div className={styles.welcome}>
    <Title txtTitle="Welcome" />
  </div>
);

export default Welcome;
