import styles from "./App.module.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className={styles.content}>
        <h1>스마트한 추적 놀이 - 클라이언트</h1>
      </div>
      <Footer />
    </div>
  );
};

export default App;
