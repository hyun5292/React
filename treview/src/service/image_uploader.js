const cloudinary = require("cloudinary").v2;

cloudinary.config({
  secure: true,
});

class ImageUploader {
  async upImage(profile) {
    const options = {
      use_fileName: true,
      unique_filename: false,
      overwrite: true,
    };

    try {
      await cloudinary.uploader.upload(profile, options);
    } catch (err) {
      console.log(
        "이미지 업로드에 문제가 생겼습니다! 정보수정에서 다시 시도해주세요!; ",
        err
      );
    }
  }
}

export default ImageUploader;
