import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import User from "./components/user/user";
import UserLogin from "./components/user_login/user_login";
import UserJoin from "./components/user_join/user_join";
import UserEdit from "./components/user_edit/user_edit";
import Factory from "./components/factory/factory";
import FactoryMain from "./components/factory_main/factory_main";
import FactorySearch from "./components/factory_search/factory_search";
import Review from "./components/review/review";
import ReviewList from "./components/review_list/review_list";
import ReviewWrite from "./components/review_write/review_write";
import ReviewEdit from "./components/review_edit/review_edit";
import styles from "./app.module.css";
import { useCallback, useEffect, useState } from "react";

const App = ({ factoryDB, authService, reviewDB }) => {
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

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header uId={uData.uId || null} onLogout={onLogout} />
      </div>
      <div className={styles.container}>
        <BrowserRouter>
          <Routes>
            <Route
              path=""
              element={
                <div className={styles.factory}>
                  <Factory factoryDB={factoryDB} />
                </div>
              }
            >
              <Route
                path=""
                element={<FactoryMain className={styles.factory_main} />}
              ></Route>
              <Route
                path="search"
                element={<FactorySearch className={styles.factory_search} />}
              ></Route>
            </Route>
            <Route
              path="user"
              element={
                <div className={styles.user}>
                  <User authService={authService} />
                </div>
              }
            >
              <Route
                path="login"
                element={<UserLogin className={styles.user_login} />}
              ></Route>
              <Route
                path="join"
                element={<UserJoin className={styles.user_join} />}
              ></Route>
              <Route
                path="edit"
                element={<UserEdit className={styles.user_edit} />}
              ></Route>
            </Route>
            <Route
              path="review"
              element={
                <div className={styles.review}>
                  <Review uData={uData} reviewDB={reviewDB} />
                </div>
              }
            >
              <Route
                path=""
                element={<ReviewList className={styles.review_list} />}
              ></Route>
              <Route
                path="write"
                element={<ReviewWrite className={styles.review_write} />}
              ></Route>
              <Route
                path="edit"
                element={<ReviewEdit className={styles.review_edit} />}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
