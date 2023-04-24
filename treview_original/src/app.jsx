import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./components/header/header";
import Main from "./components/mainPg/mainPg";
import Login from "./components/loginPg/loginPg";
import SearchPg from "./components/searchPg/searchPg";
import ReviewPg from "./components/reviewPg/reviewPg";
import ReviewWritePg from "./components/reviewWritePg/reviewWritePg";
import JoinPg from "./components/joinPg/joinPg";
import ModifyPg from "./components/modifyPg/modifyPg";
import { useCallback, useEffect, useState } from "react";
import Spinner from "./components/spinner/spinner";
import Footer from "./components/footer/footer";

const App = ({ imageUploader, factoryDB, authService, revService }) => {
  const [uData, setUData] = useState({
    uId: "",
    uDisplayName: "",
    uEmail: "",
    uProfile: "",
  });
  const [loading, setLoading] = useState(false);

  const onLogout = useCallback(() => {
    authService.logout().then(window.location.reload());
  }, [authService]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUData({
          uId: user.email.split("@")[0],
          uDisplayName: user.displayName,
          uEmail: user.email,
          uProfile: user.photoURL,
        });
      } else {
        authService.logout();
      }
    });
  }, [authService]);

  return loading ? (
    <Spinner />
  ) : (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header uId={uData.uId || null} onLogout={onLogout} />
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
              element={
                <JoinPg
                  imageUploader={imageUploader}
                  authService={authService}
                />
              }
            ></Route>
            <Route
              path="/modify"
              element={
                <ModifyPg
                  imageUploader={imageUploader}
                  authService={authService}
                />
              }
            ></Route>
            <Route
              path="/search"
              element={<SearchPg factoryDB={factoryDB} />}
            ></Route>
            <Route
              path="/review"
              element={<ReviewPg uId={uData.uId} revService={revService} />}
            ></Route>
            <Route
              path="/writeReview"
              element={
                <ReviewWritePg
                  uData={uData}
                  factoryDB={factoryDB}
                  revService={revService}
                />
              }
            ></Route>
            <Route
              path="/modifyReview"
              element={
                <ReviewWritePg
                  uData={uData}
                  factoryDB={factoryDB}
                  revService={revService}
                />
              }
            ></Route>
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