import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header.jsx";
import Main from "./components/mainPg/mainPg.jsx";
import IntroPg from "./components/introPg/introPg";
import SearchPg from "./components/searchPg/searchPg";
import ReviewPg from "./components/reviewPg/reviewPg";
import { useCallback } from "react";

function App({ factoryDB }) {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/intro" element={<IntroPg />}></Route>
            <Route path="/search" element={<SearchPg />}></Route>
            <Route path="/review" element={<ReviewPg />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
