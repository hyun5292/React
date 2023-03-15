import axios from "axios";

class ImageUploader {
  async uploadImg(imgFile) {
    try {
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);
      data.append("api_secret", process.env.REACT_APP_CLOUDINARY_API_SECRET);
      data.append("upload_preset", "treview");
      data.append("file", imgFile);

      const config = {
        header: { "Content-Type": "multipart/form-data" },
      };

      const result = await axios
        .post(
          `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/upload`,
          data,
          config
        )
        .then((result) => {
          return result.data.url;
        });
      return result;
    } catch (err) {
      alert(
        "알 수 없는 이유로 프로필 사진 저장에 실패하였습니다! 죄송합니다!\n회원정보 수정에서 다시 등록해주세요!; cloudinary 오류" +
          err
      );
    }
    return false;
  }
}

export default ImageUploader;
