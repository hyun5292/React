import React from "react";
import styles from "./comments.module.css";
import { FaCommentDots } from "react-icons/fa";

const Comments = (props) => {
  return (
    <div className={styles.comments}>
      <div className={styles.titleBox}>
        <FaCommentDots className={styles.icon} />
        <span className={styles.title}>Comments</span>
      </div>
    </div>
  );
};

export default Comments;
