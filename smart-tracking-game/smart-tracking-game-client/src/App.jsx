import styles from "./App.module.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MainPg from "./components/mainPg/mainPg";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className={styles.content}>
        <MainPg />
      </div>
      <Footer />
    </div>
  );
};

export default App;
