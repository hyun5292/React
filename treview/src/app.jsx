import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./components/header/header";
import Main from "./components/mainPg/mainPg";
import Login from "./components/loginPg/loginPg";
import SearchPg from "./components/searchPg/searchPg";
import ReviewPg from "./components/reviewPg/reviewPg";
import ReviewWritePg from "./components/reviewWritePg/reviewWritePg";
import JoinPg from "./components/joinPg/joinPg";
import { useCallback, useEffect, useState } from "react";
import Spinner from "./components/spinner/spinner";
import Footer from "./components/footer/footer";

const App = ({ factoryDB, authService }) => {
  const [uId, setUId] = useState("");
  const [uEmail, setUEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const onLogout = useCallback(() => {
    authService.logout().then(window.location.reload());
  }, [authService]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUId(user.uid);
        setUEmail(user.email);
      } else {
        authService.logout();
      }
    });
  }, [uId, authService, onLogout]);

  return loading ? (
    <Spinner />
  ) : (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header uEmail={uEmail.split("@")[0]} onLogout={onLogout} />
      </div>
      <div className={styles.container}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div className={styles.mainPg}>
                  <Main />
                </div>
              }
            ></Route>
            <Route
              path="/login"
              element={<Login authService={authService} />}
            ></Route>
            <Route
              path="/join"
              element={<JoinPg authService={authService} />}
            ></Route>
            <Route
              path="/search"
              element={<SearchPg factoryDB={factoryDB} />}
            ></Route>
            <Route path="/review" element={<ReviewPg />}></Route>
            <Route path="/writeReview" element={<ReviewWritePg />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
