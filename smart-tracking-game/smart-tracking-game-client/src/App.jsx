import styles from "./App.module.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MainPg from "./components/mainPg/mainPg";
import MapPg from "./components/mapPg/mapPg";
import QuestPg from "./components/questPg/questPg";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className={styles.content}>
        {/* <MainPg /> */}
        {/* <QuestPg /> */}
        <MapPg />
      </div>
      <Footer />
    </div>
  );
};

export default App;
