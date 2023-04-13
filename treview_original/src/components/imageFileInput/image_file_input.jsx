import React, { useEffect, useRef, useState } from "react";
import styles from "./image_file_input.module.css";
import { BsArrowClockwise } from "react-icons/bs";

const ImageFileInput = ({ uProfile, onFileChange, onFileReset }) => {
  const profileImgRef = useRef();
  const resetImgRef = useRef();
  const profileContRef = useRef();
  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(false);

  const loadFile = async (event) => {
    const imgFile = URL.createObjectURL(event.target.files[0]);
    setProfile(imgFile);
    onFileChange((before) => {
      return {
        ...before,
        uProfileURL: event.target.files[0],
        uProfileLink: imgFile,
      };
    });

    profileImgRef.current.style = "display: inline-block;";
    resetImgRef.current.style = "display: flex;";
    profileContRef.current.style = "display: none;";

    URL.revokeObjectURL(event.target.files[0]);
  };

  const resetProfile = () => {
    setProfile("");
    onFileChange({
      uProfileID: "",
      uProfileSIG: "",
      uProfileTIME: "",
      uProfileURL: "",
      uProfileLink: "",
    });
    onFileReset({
      uProfileID: "",
      uProfileSIG: "",
      uProfileTIME: "",
      uProfileURL: "",
      uProfileLink: "",
    });

    profileImgRef.current.style = "display: none;";
    resetImgRef.current.style = "display: none;";
    profileContRef.current.style = "display: flex;";
  };

  useEffect(() => {
    setLoading(true);
    if (uProfile !== "" && uProfile !== null) {
      setProfile(uProfile);
      profileImgRef.current.style = "display: inline-block;";
      resetImgRef.current.style = "display: flex;";
      profileContRef.current.style = "display: none;";
    }
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, [uProfile]);

  return (
    <div className={styles.inputFileCont}>
      <div className={styles.imgCont}>
        <input
          type="file"
          id="uploadImg"
          name="uploadImg"
          style={{ display: "none" }}
          accept=".jpg, .png"
          onChange={(event) => loadFile(event)}
        />
        <div ref={profileContRef} className={styles.profileCont}>
          <label htmlFor="uploadImg" className={styles.btnUpload}>
            <img
              className={styles.uploadImg}
              src="./images/uploadImg.png"
              alt="이미지 추가"
              style={{ width: "6rem", height: "auto" }}
            />
          </label>
          <label htmlFor="profileText">프로필 사진 추가</label>
        </div>
        <div className={loading ? styles.loading : styles.gone}>
          <span>Loading</span>
          <span className={styles.dot}>.</span>
          <span className={styles.dot}>.</span>
          <span className={styles.dot}>.</span>
        </div>
        <img
          alt="프로필 이미지"
          src={uProfile ? uProfile : profile}
          ref={profileImgRef}
          width="400px"
          height="400px"
          className={styles.profileImg}
        ></img>
      </div>
      <button
        ref={resetImgRef}
        className={styles.resetImg}
        onClick={resetProfile}
      >
        <BsArrowClockwise />
      </button>
    </div>
  );
};

export default ImageFileInput;
