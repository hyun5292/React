import { firebaseAuth } from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);

    return firebaseAuth.signInWithPopup(authProvider);
  }
}

export default AuthService;
