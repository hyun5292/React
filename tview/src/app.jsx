import styles from "./app.module.css";
import Header from "./components/header/header.jsx";
import Main from "./components/mainPg/mainPg.jsx";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.container}>
        <Main />
      </div>
    </div>
  );
}

export default App;
