import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./components/header/header";
import Main from "./components/mainPg/mainPg";
import Login from "./components/loginPg/loginPg";
import SearchPg from "./components/searchPg/searchPg";
import ReviewPg from "./components/reviewPg/reviewPg";
import WriteReview from "./components/writeReviewPg/writeReviewPg";
import JoinPg from "./components/joinPg/joinPg";
import { useCallback, useEffect, useState } from "react";
import Spinner from "./components/spinner/spinner";

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
        const address = user.email.split("@")[0];
        setUId(user.uid);
        setUEmail(address);
      } else {
        authService.logout();
      }
    });
  }, [uId, authService, onLogout]);

  return loading ? (
    <Spinner />
  ) : (
    <div className={styles.app}>
      <div id="contHead" className={styles.header}>
        <Header uEmail={uEmail} onLogout={onLogout} />
      </div>
      <div className={styles.container}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
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
            <Route path="/writeReview" element={<WriteReview />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
