import React from "react";
import styles from "./contents.module.css";
import Comments from "../comments/comments";

const Contents = (props) => {
  return (
    <div className={styles.Contents}>
      <p className={styles.title}>#1-1 짧은뜨기</p>
      <div className={styles.videoWrap}>
        <img
          className={styles.video}
          src="./assets/youtube.png"
          alt="유튜브 임시 이미지"
        />
      </div>
      <div className={styles.info}>
        <p>
          내용이 여러줄이겠죠
          <br />
          내가 쓸 수 있는 만큼
          <br />
          내가 쓸 수 있는 만큼
          <br />
          내가 쓸 수 있는 만큼
          <br />
          내가 쓸 수 있는 만큼
        </p>
      </div>
      <Comments />
    </div>
  );
};

export default Contents;
