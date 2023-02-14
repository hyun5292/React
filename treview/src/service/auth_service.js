import { firebaseAuth, createUserWithEmailAndPassword } from "./firebase";

class AuthService {
  async join(email, password) {
    try {
      const createdUser = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      // setAuthInfo({ uid, email, authToken: stsTokenManager });
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
          alert("회원가입에 실패하였습니다! 다시 시도해주세요!");
          break;
      }
      return;
    }
  }
}

export default AuthService;
