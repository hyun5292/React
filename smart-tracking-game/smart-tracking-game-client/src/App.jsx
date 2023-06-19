import styles from "./App.module.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MainPg from "./components/mainPg/mainPg";
import MapPg from "./components/mapPg/mapPg";
import QuestPg from "./components/questPg/questPg";

const App = () => {
  return (
    <div className="App">
      <Header className={styles.header} />
      <div className={styles.content}>
        <MainPg />
        {/* <QuestPg /> */}
        {/* <MapPg /> */}
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};

export default App;
