import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { firebaseAuth } from "./firebase";

class AuthService {
  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  async join(userData) {
    try {
      await firebaseAuth
        .createUserWithEmailAndPassword(userData.uEmail, userData.uPwd)
        .then((result) => {
          result.user
            .updateProfile({
              displayName: userData.uId,
            })
            .catch((err) => {
              alert(
                "죄송합니다! 오류로 인해 회원정보가 등록되지 않았습니다! 회원정보 수정에서 다시 입력해주세요!;",
                err
              );
            });
        })
        .then(() => {
          alert(
            userData.uEmail + "님의 회원가입이 완료되었습니다! 환영합니다!"
          );
        });
      return true;
    } catch (err) {
      switch (err.code) {
        case "auth/weak-password":
          alert("비밀번호는 6자리 이상이어야 합니다!");
          break;
        case "auth/invalid-email":
          alert(
            "잘못된 이메일 주소입니다!\n\n직접 입력 후 수정한 경우 화살표 버튼을 한 번 더 클릭해주세요!"
          );
          break;
        case "auth/email-already-in-use":
          alert("이미 가입되어 있는 계정입니다!");
          break;
        default:
          alert(
            "알 수 없는 이유로 회원가입에 실패하였습니다! 죄송합니다!" + err
          );
          break;
      }
      return false;
    }
  }

  async join_data(userData, imgData) {
    try {
      await firebase
        .database()
        .ref("users/" + userData.uId)
        .set({
          uEmail: userData.uEmail,
          uName: userData.uName,
          uTel: userData.uTel,
          uProfileSIG: imgData.uProfileSIG || "",
          uProfileTIME: imgData.uProfileTIME || "",
          uProfileID: imgData.uProfileID || "",
          uProfileURL: imgData.uProfileURL || "",
        })
        .catch((err) => {
          alert(
            "알 수 없는 이유로 회원 데이터 등록에 실패하였습니다! 죄송합니다!\n회원정보 수정에서 다시 입력해주세요!" +
              err
          );
        });
    } catch (err) {
      alert(
        "알 수 없는 이유로 회원 데이터 등록에 실패하였습니다! 죄송합니다!\n회원정보 수정에서 다시 입력해주세요!" +
          err
      );
    }
  }

  async update_Img(imgURL) {
    try {
      await firebaseAuth.currentUser.updateProfile({
        photoURL: imgURL || "",
      });
      return true;
    } catch (err) {
      alert(
        "죄송합니다!\\n오류로 인해 리뷰 등록 시 프로필 사진이 등록되지 않을 수 있습니다!\\n회원정보 수정에서 다시 등록해주세요!;",
        err
      );
    }
    return false;
  }

  async login(email, password) {
    try {
      await firebaseAuth.signInWithEmailAndPassword(email, password);

      return true;
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          alert(
            "가입되어 있지 않은 계정입니다!\n\n직접 입력 후 수정한 경우 화살표 버튼을 한 번 더 클릭해주세요!"
          );
          break;
        case "auth/wrong-password":
          alert("비밀번호가 틀렸습니다!");
          break;
        default:
          alert(
            "알 수 없는 이유로 로그인에 실패하였습니다! 죄송합니다! 다시 시도해주세요!" +
              err
          );
          break;
      }
    }
    return false;
  }

  async logout() {
    await firebaseAuth.signOut();
    return;
  }

  async get_UserData(uId) {
    try {
      const result = await firebase
        .database()
        .ref("users/" + uId)
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            return snapshot.val();
          } else {
            return false;
          }
        });
      return result;
    } catch (err) {
      alert(
        "알 수 없는 이유로 데이터를 가져오는데에 실패하였습니다! 죄송합니다! 다시 시도해주세요!;" +
          err
      );
    }
  }

  async update_uData(userData, imgData) {
    try {
      await firebase
        .database()
        .ref("users/" + userData.uId)
        .update({
          uEmail: userData.uEmail,
          uName: userData.uName,
          uTel: userData.uTel,
          uProfileTIME: imgData.uProfileTIME,
          uProfileSIG: imgData.uProfileSIG,
          uProfileID: imgData.uProfileID,
          uProfileURL: imgData.uProfileURL,
        })
        .then(() => {
          alert("정보수정 완료되었습니다!");
        });
      return true;
    } catch (err) {
      alert(
        "알 수 없는 이유로 정보수정에 실패하였습니다! 죄송합니다! 다시 시도해주세요!;" +
          err
      );
    }
    return false;
  }

  async remove_uData(uId) {
    try {
      await firebase
        .database()
        .ref("users/" + uId)
        .remove()
        .then(() => {
          alert("회원정보가 삭제되었습니다!");
        });
      return true;
    } catch (err) {
      alert(
        "알 수 없는 이유로 회원정보 삭제에 실패하였습니다! 죄송합니다! 다시 시도해주세요!;" +
          err
      );
    }
    return false;
  }

  async withdraw_user() {
    try {
      await firebaseAuth.currentUser.delete().then(() => {
        alert("회원탈퇴 완료되었습니다! 이용해주셔서 감사합니다!");
      });
      return true;
    } catch (err) {
      alert(
        "알 수 없는 이유로 탈퇴에 실패하였습니다! 죄송합니다! 재로그인 후 다시 시도해주세요!;" +
          err
      );
    }
    return false;
  }
}

export default AuthService;
