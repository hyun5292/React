import { firebaseStorage } from "./firebase";
import "firebase/storage";

class ImageUploader {
  async upload(profile) {
    // const profileRef = firebaseStorage
    //   .ref()
    //   .child("profiles/" + profile.fileName);

    // try {
    //   await profileRef.put(profile).then((snapshot) => {
    //     console.log("Uploaded a blob!; ", snapshot);
    //   });
    //   return true;
    // } catch (err) {
    //   console.log(
    //     "이미지 업로드에 문제가 생겼습니다! 정보수정에서 다시 시도해주세요!; ",
    //     err
    //   );
    //   return false;
    // }
    console.log("imageUploader profile = ", profile);
  }
}

export default ImageUploader;
