import { firebaseStorage } from "./firebase";
import "firebase/compat/storage";

class FirebaseImg {
  async upload(profile) {
    const profileRef = firebaseStorage
      .ref()
      .child("profiles/" + profile.fileName);

    try {
      const putProfile = (await profileRef.put(profile)) || false;
      if (putProfile) {
        const getImgUrl =
          profileRef.getDownloadURL().then((url) => {
            return url;
          }) || false;
        return getImgUrl;
      } else return false;
    } catch (err) {
      console.log(
        "이미지 업로드에 문제가 생겼습니다! 정보수정에서 다시 시도해주세요!; ",
        err
      );
      return false;
    }
  }
}

export default FirebaseImg;
