import React, { memo, useEffect, useRef, useState } from "react";
import styles from "./image_file_input.module.css";
import { BsArrowClockwise } from "react-icons/bs";

const ImageFileInput = memo(({ onFileChange, imageUploader }) => {
  const profileImgRef = useRef();
  const resetImgRef = useRef();
  const profileContRef = useRef();
  const [profile, setProfile] = useState({ fileName: null, fileUrl: null });

  const loadFile = async (event) => {
    const fName = event.target.files[0].name;
    const fURL = URL.createObjectURL(event.target.files[0]);
    setProfile({ fileName: fName, fileUrl: fURL });

    profileImgRef.current.style = "display: inline-block;";
    resetImgRef.current.style = "display: flex;";
    profileContRef.current.style = "display: none;";

    URL.revokeObjectURL(event.target.files[0]);
  };

  const resetProfile = () => {
    setProfile({ fileName: null, fileUrl: null });
    onFileChange({ fileName: null, fileUrl: null });

    profileImgRef.current.style = "display: none;";
    resetImgRef.current.style = "display: none;";
    profileContRef.current.style = "display: flex;";
  };

  useEffect(() => {
    imageUploader.upload(profile);
  }, [imageUploader, profile]);

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
        <img
          src={profile.fileUrl}
          alt="프로필 이미지"
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
});

export default ImageFileInput;
