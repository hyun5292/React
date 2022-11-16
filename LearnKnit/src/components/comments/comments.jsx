import React from "react";
import styles from "./comments.module.css";
import { FaCommentDots, FaCheckCircle, FaUserCircle } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { CgClose } from "react-icons/cg";

const Comments = (props) => {
  return (
    <div className={styles.comments}>
      <div className={styles.titleBox}>
        <FaCommentDots className={styles.icon} />
        <span className={styles.title}>Comments</span>
      </div>
      <form className={styles.inputForm} action="#">
        <input className={styles.inputCm} type="text" />
        <button className={styles.submit}>
          <FaCheckCircle className={styles.icon} />
          작성
        </button>
      </form>
      <ul className={styles.cmtsList}>
        <li className={styles.cmtsItem}>
          <FaUserCircle className={`${styles.icon} ${styles.cmtIcon}`} />
          <span className={styles.cmtsTxt}>댓글1</span>
          <AiFillHeart className={styles.heartIcon} />
          <CgClose className={styles.deleteIcon} />
        </li>
        <li className={styles.cmtsItem}>
          <FaUserCircle className={`${styles.icon} ${styles.cmtIcon}`} />
          <span className={styles.cmtsTxt}>댓글1</span>
          <AiFillHeart className={styles.heartIcon} />
          <CgClose className={styles.deleteIcon} />
        </li>
        <li className={styles.cmtsItem}>
          <FaUserCircle className={`${styles.icon} ${styles.cmtIcon}`} />
          <span className={styles.cmtsTxt}>댓글1</span>
          <AiFillHeart className={styles.heartIcon} />
          <CgClose className={styles.deleteIcon} />
        </li>
        <li className={styles.cmtsItem}>
          <FaUserCircle className={`${styles.icon} ${styles.cmtIcon}`} />
          <span className={styles.cmtsTxt}>댓글1</span>
          <AiFillHeart className={styles.heartIcon} />
          <CgClose className={styles.deleteIcon} />
        </li>
      </ul>
    </div>
  );
};

export default Comments;
