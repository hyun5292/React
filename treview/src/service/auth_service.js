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
      await firebaseAuth.signInWithPhoneNumber(userData.uTel).then((result) => {
        alert(userData.uEmail + "님의 회원가입이 완료되었습니다! 환영합니다!");
      });
      // await firebaseAuth
      //   .createUserWithEmailAndPassword(userData.uEmail, userData.uPwd)
      //   .then((result) => {
      //     result.user
      //       .updateProfile({
      //         displayName: userData.uName,
      //         phoneNumber: userData.uTel,
      //       })
      //       .catch((err) => {
      //         alert(
      //           "죄송합니다! 오류로 인해 회원정보가 등록되지 않았습니다! 회원정보 수정에서 다시 입력해주세요!;",
      //           err
      //         );
      //       });
      //   })
      //   .then((result) => {
      //     alert(
      //       userData.uEmail + "님의 회원가입이 완료되었습니다! 환영합니다!"
      //     );
      //   });
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

  // async join_data(userData) {
  //   try {
  //     await firebase
  //       .database()
  //       .ref("users/" + userData.uId)
  //       .set({
  //         uEmail: userData.uEmail,
  //         uName: userData.uName,
  //         uTel: userData.uTel,
  //         uProfileName: userData.uProfileName,
  //         //uProfileUrl: userData.uProfileUrl,
  //       });
  //   } catch (err) {
  //     alert(
  //       "알 수 없는 이유로 회원 데이터 등록에 실패하였습니다! 죄송합니다!\n회원정보 수정에서 다시 입력해주세요!" +
  //         err
  //     );
  //   }
  // }

  async login(email, password) {
    try {
      await firebaseAuth.signInWithEmailAndPassword(email, password);

      return "success";
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
          alert("알 수 없는 이유로 로그인에 실패하였습니다! 죄송합니다!" + err);
          break;
      }
    }
    return "Error";
  }

  async logout() {
    await firebaseAuth.signOut();
    return;
  }
}

export default AuthService;
