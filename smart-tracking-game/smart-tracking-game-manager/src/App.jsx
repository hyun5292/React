import styles from "./App.module.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import AnswerPg from "./components/start/answerPg/answerPg";
import MapPg from "./components/start/mapPg/mapPg";
import StartPg from "./components/start/startPg/startPg";
import MainPg from "./components/mainPg/mainPg";
import QuestListPg from "./components/question/questListPg/questListPg";
import QuestPg from "./components/question/quest/questPg";

const App = () => {
  return (
    <div className={styles.app}>
      <Header className={styles.header} />
      <div className={styles.content}>
        {/* <StartPg /> */}
        {/* <AnswerPg /> */}
        {/* <MapPg /> */}
        {/* <MainPg /> */}
        {/* <QuestListPg /> */}
        <QuestPg />
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};

export default App;
