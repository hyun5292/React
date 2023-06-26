import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MainPg from "./components/mainPg/mainPg";
import MapPg from "./components/mapPg/mapPg";
import QuestPg from "./components/questPg/questPg";
import { useState } from "react";

const App = () => {
  const [teamNum, setTeamNum] = useState(0);
  const [member, setMember] = useState("");
  console.log(teamNum, member);

  const setTeamInfo = (tNum, mber) => {
    setTeamNum(tNum);
    setMember(mber);
  };

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header className={styles.header} />
        <div className={styles.content}>
          <Routes>
            <Route
              path="/"
              element={
                <MainPg
                  teamNum={teamNum}
                  member={member}
                  setTeamInfo={setTeamInfo}
                />
              }
            />
            <Route path="map" element={<MapPg />} />
            <Route path="quest" element={<QuestPg />} />
          </Routes>
        </div>
        <Footer className={styles.footer} />
      </BrowserRouter>
    </div>
  );
};

export default App;
