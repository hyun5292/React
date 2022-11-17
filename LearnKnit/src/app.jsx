import styles from "./app.module.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Contents from "./components/contents/contents";
import { useState } from "react";

function App() {
  const [menu, setMenu] = useState(true);

  const handleNavbar = () => {
    setMenu(!menu);
  };

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <Header menu={menu} handleNavbar={handleNavbar} />
      </div>
      <div className={styles.cont}>
        {menu ? (
          <div className={styles.navbar}>
            <Navbar />
          </div>
        ) : (
          ""
        )}
        <div className={styles.contents}>
          <Contents />
        </div>
      </div>
    </div>
  );
}

export default App;
