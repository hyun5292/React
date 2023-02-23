import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./components/header/header";
import Main from "./components/mainPg/mainPg";
import Login from "./components/loginPg/loginPg";
import SearchPg from "./components/searchPg/searchPg";
import ReviewPg from "./components/reviewPg/reviewPg";
import WriteReview from "./components/writeReviewPg/writeReviewPg";
import JoinPg from "./components/joinPg/joinPg";
import { useState } from "react";

function App({ factoryDB, authService }) {
  const [uId, setUId] = useState("");

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header uId={uId} />
      </div>
      <div className={styles.container}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route
              path="/login"
              element={<Login authService={authService} setUId={setUId} />}
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
}

export default App;
