import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./index.module.css";
import App from "./app";
import stepsData from "./db/stepsData.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App stepsData={stepsData} />
  </React.StrictMode>
);
