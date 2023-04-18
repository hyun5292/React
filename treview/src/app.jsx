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

const App = ({ factoryDB }) => {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
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
                  <User />
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
                  <Review />
                </div>
              }
            >
              <Route
                path="list"
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
