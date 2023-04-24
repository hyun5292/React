import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./firebase";

class ReviewService {
  async writeReview(revData, fData) {
    try {
      await firebase
        .database()
        .ref(
          "reviews/" +
            fData.SIGUN_NM +
            "/" +
            fData.BIZPLC_NM +
            "/" +
            revData.R_ID
        )
        .set({
          U_ID: revData.U_ID,
          F_ID: revData.F_ID,
          R_ID: revData.R_ID,
          R_DATE: revData.R_DATE,
          R_TITLE: revData.R_TITLE,
          R_CONT: revData.R_CONT,
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

  async getReviewList(fData) {
    // try {
    const result = await firebase
      .database()
      .ref("reviews/" + fData.SIGUN_NM + "/" + fData.BIZPLC_NM)
      .get()
      .then((snapshot) => {
        const reviewList = [];
        if (snapshot.exists()) {
          const rData_obj = snapshot.val();

          Object.entries(rData_obj).map((list) => {
            reviewList.push(list[1]);
          });

          return reviewList;
        } else {
          return false;
        }
      })
      .catch((err) => console.log("err = ", err));
    return result;
    // } catch (error) {
    //   alert(
    //     "알 수 없는 이유로 리뷰를 가져오는데에 실패했습니다! 다시 시도해주세요! ;",
    //     error
    //   );
    // }
    // return false;
  }

  async searchReview(fData, keyword) {
    try {
      const result = await firebase
        .database()
        .ref("reviews/" + fData.SIGUN_NM + "/" + fData.BIZPLC_NM)
        .get()
        .then((snapshot) => {
          const reviewList = [];
          if (snapshot.exists()) {
            const rData_obj = snapshot.val();

            Object.entries(rData_obj).map((list) => {
              const review = list[1];

              if (review.R_TITLE.includes(keyword)) {
                reviewList.push(list[1]);
              }
            });

            return reviewList;
          } else {
            return false;
          }
        });
      return result;
    } catch (err) {
      alert(
        "알 수 없는 이유로 리뷰를 가져오는데에 실패했습니다! 다시 시도해주세요! ;",
        err
      );
    }
    return false;
  }

  async modifyReview(fData) {
    try {
      await firebase
        .database()
        .ref(
          "reviews/" + fData.SIGUN_NM + "/" + fData.BIZPLC_NM + "/" + fData.R_ID
        )
        .update({
          U_ID: fData.U_ID,
          F_ID: fData.F_ID,
          R_ID: fData.R_ID,
          R_DATE: fData.R_DATE,
          R_TITLE: fData.R_TITLE,
          R_CONT: fData.R_CONT,
        })
        .then(() => {
          alert("리뷰를 수정했습니다!");
        });
      return true;
    } catch (err) {
      alert(
        "알 수 없는 이유로 리뷰 수정에 실패했습니다! 다시 시도해주세요! ;",
        err
      );
    }
    return false;
  }

  async removeReview(fData) {
    try {
      await firebase
        .database()
        .ref(
          "reviews/" + fData.SIGUN_NM + "/" + fData.BIZPLC_NM + "/" + fData.R_ID
        )
        .remove()
        .then(() => {
          alert("리뷰가 삭제되었습니다!");
        });
      return true;
    } catch (err) {
      alert(
        "알 수 없는 이유로 리뷰 삭제에 실패하였습니다! 죄송합니다! 다시 시도해주세요!;" +
          err
      );
    }
    return false;
  }
}

export default ReviewService;
