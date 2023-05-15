import React, { useEffect, useRef, useState } from "react";
import styles from "./img_uploader.module.css";
import { BsArrowClockwise } from "react-icons/bs";

const ImgUploader = ({ nowProfile, onFileReset, handleProfile }) => {
  const addImgRef = useRef();
  const profileImgRef = useRef();
  const resetBtnRef = useRef();
  const [profile, setProfile] = useState("");

  const loadFile = async (event) => {
    const imgFile = URL.createObjectURL(event.target.files[0]);
    setProfile(imgFile);
    handleProfile((before) => {
      return {
        ...before,
        uProfileURL: event.target.files[0],
        uProfileLink: imgFile,
      };
    });

    profileImgRef.current.style = "display: inline-block;";
    resetBtnRef.current.style = "display: flex;";
    addImgRef.current.style = "display: none;";

    URL.revokeObjectURL(event.target.files[0]);
  };

  const resetProfile = () => {
    setProfile("");
    onFileReset({
      uProfileID: "",
      uProfileSIG: "",
      uProfileTIME: "",
      uProfileURL: "",
      uProfileLink: "",
    });
    handleProfile({
      uProfileID: "",
      uProfileSIG: "",
      uProfileTIME: "",
      uProfileURL: "",
      uProfileLink: "",
    });

    addImgRef.current.style = "display: flex;";
    profileImgRef.current.style = "display: none;";
    resetBtnRef.current.style = "display: none;";
  };

  useEffect(() => {
    if (nowProfile) {
      setProfile(nowProfile);
      console.log(1);
      profileImgRef.current.style = "display: inline-block;";
      resetBtnRef.current.style = "display: flex;";
      addImgRef.current.style = "display: none;";
    }
  }, [nowProfile]);

  return (
    <div className={styles.imgUploader}>
      <div className={styles.imgCont}>
        <input
          type="file"
          id="uploadImg"
          name="uploadImg"
          style={{ display: "none" }}
          accept=".jpg, .png"
          onChange={(event) => loadFile(event)}
        />
        <div ref={addImgRef} className={styles.profileCont}>
          <label htmlFor="uploadImg" className={styles.upload_btn}>
            <img
              className={styles.upload_Img}
              src="../images/uploadImg.png"
              alt="이미지 추가"
              style={{ width: "6rem", height: "auto" }}
            />
          </label>
          <label htmlFor="profileText">프로필 사진 추가</label>
        </div>
        <img
          alt="프로필 이미지"
          src={profile}
          ref={profileImgRef}
          width="400px"
          height="400px"
          className={styles.profile_img}
        ></img>
      </div>
      <button
        ref={resetBtnRef}
        className={styles.reset_btn}
        onClick={resetProfile}
      >
        <BsArrowClockwise />
      </button>
    </div>
  );
};

export default ImgUploader;
