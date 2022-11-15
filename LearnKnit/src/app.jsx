import styles from "./app.module.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Contents from "./components/contents/contents";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.cont}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.contents}>
          <Contents />
        </div>
      </div>
    </div>
  );
}

export default App;
