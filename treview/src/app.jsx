import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./components/header/header";
import Main from "./components/mainPg/mainPg";
import Login from "./components/loginPg/loginPg";
import SearchPg from "./components/searchPg/searchPg";
import ReviewPg from "./components/reviewPg/reviewPg";
import WriteReview from "./components/writeReviewPg/writeReviewPg";
import JoinPg from "./components/joinPg/joinPg";
import { useEffect } from "react";
import { fireStore } from "./service/firebase.js";

function App({ factoryDB }) {
  useEffect(() => {
    console.log(fireStore._databaseId.projectId);
  });
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/join" element={<JoinPg />}></Route>
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
}

export default App;
