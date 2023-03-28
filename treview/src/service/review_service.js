import firebase from "firebase/compat/app";
import "firebase/compat/database";

class ReviewService {
  async writeReview(revData, fData) {
    try {
      await firebase
        .database()
        .ref(
          "reviews/" +
            fData.SIGUN_CD +
            "/" +
            fData.BIZPLC_NM +
            "/" +
            revData.rId
        )
        .set({
          uId: revData.uId,
          fId: revData.fId,
          rId: revData.rId,
          rDate: revData.rDate,
          rTitle: revData.rTitle,
          rContent: revData.rContent,
        })
        .then(() => {
          alert("리뷰를 등록했습니다!");
        });
      return true;
    } catch (err) {
      alert(
        "알 수 없는 이유로 리뷰 등록에 실패했습니다! 다시 시도해주세요! ;",
        err
      );
    }
    return false;
  }
}

export default ReviewService;
