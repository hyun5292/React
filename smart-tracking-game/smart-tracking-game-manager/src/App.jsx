import styles from "./App.module.css";
import AnswerPg from "./components/answerPg/answerPg";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import StartPg from "./components/startPg/startPg";
import MapPg from "./components/mapPg/mapPg";

const App = () => {
  return (
    <div className={styles.app}>
      <Header className={styles.header} />
      <div className={styles.content}>
        {/* <StartPg /> */}
        {/* <AnswerPg /> */}
        <MapPg />
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};

export default App;
