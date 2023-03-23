import axios from "axios";
// import { Cloudinary } from "@cloudinary/url-gen";

class ImageUploader {
  async uploadImg(imgFile) {
    try {
      // const timestamp = Math.round(new Date().getTime() / 1000);
      // const signature = Cloudinary.utils.api_sign_request(
      //   {
      //     timestamp: timestamp,
      //     public_id: imgFile.public_id,
      //   },
      //   process.env.REACT_APP_CLOUDINARY_API_KEY
      // );

      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);
      data.append("api_secret", process.env.REACT_APP_CLOUDINARY_API_SECRET);
      data.append("upload_preset", "treview");
      // data.append("timestamp", timestamp);
      // data.append("signature", signature);
      data.append("file", imgFile.url);

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
          const imgData = {
            signature: result.data.signature,
            timestamp: result.data.timestamp,
            public_id: result.data.public_id,
            url: result.data.url,
          };
          console.log(result.data);
          return imgData;
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

  async deleteImg(imgFile) {
    try {
      const data = new FormData();
      data.append("public_id", imgFile.public_id);
      data.append("signature", imgFile.signature);
      data.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);
      data.append("api_secret", process.env.REACT_APP_CLOUDINARY_API_SECRET);
      data.append("timestamp", imgFile.timestamp);

      const config = {
        header: { "Content-Type": "multipart/form-data" },
      };

      await axios
        .post(
          `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_NAME}/image/destroy`,
          data,
          config
        )
        .then((result) => {
          console.log("deleteImg result = ", result);
        });
      return true;
    } catch (err) {
      alert(
        "알 수 없는 이유로 프로필 사진 삭제에 실패하였습니다! ; cloudinary 오류" +
          err
      );
    }
    return false;
  }
}

export default ImageUploader;
