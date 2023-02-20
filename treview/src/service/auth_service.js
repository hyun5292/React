import {
  firebaseAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase";

class AuthService {
  async join(email, password) {
    try {
      const createdUser = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      alert(email + "님의 회원가입이 완료되었습니다! 환영합니다!");
    } catch (err) {
      switch (err.code) {
        case "auth/weak-password":
          alert("비밀번호는 6자리 이상이어야 합니다!");
          break;
        case "auth/invalid-email":
          alert("잘못된 이메일 주소입니다!");
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
      return;
    }
  }

  // async login(email, password) {
  //   try {
  //     const currentUser = await signInWithEmailAndPassword(
  //       firebaseAuth,
  //       email,
  //       password
  //     );

  //     alert(email, "님의 어서오세요! 환영합니다!");
  //   } catch (err) {
  //     alert("알 수 없는 이유로 로그인에 실패하였습니다! 죄송합니다!" + err);
  //   }
  // }
}

export default AuthService;
