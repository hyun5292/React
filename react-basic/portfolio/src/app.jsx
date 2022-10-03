import styles from "./app.module.css";
import Header from "./components/header/header";
import Welcome from "./components/welcome/welcome";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Header />
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;
