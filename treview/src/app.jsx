import { useState } from "react";
import styles from "./app.module.css";
import Header from "./components/header/header.jsx";
import Main from "./components/mainPg/mainPg.jsx";

function App() {
  const [searchF, setSearchF] = useState();

  const onSearchBar = (schSigun) => {
    console.log("schSigun.sigun = ", schSigun.sigun);
    console.log("schSigun.fName = ", schSigun.fName);
  };

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <div className={styles.mainPg}>
          <Main onSearchBar={onSearchBar} />
        </div>
      </div>
    </div>
  );
}

export default App;
