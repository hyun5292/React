import React from "react";
import styles from "./title.module.css";

const Title = ({ txtTitle }) => <h1 className={styles.title}>{txtTitle}</h1>;

export default Title;
