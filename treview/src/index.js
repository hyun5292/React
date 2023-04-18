import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import "./index.module.css";
import App from "./app";
import FactoryList from "./service/factoryList";

const httpClient = axios.create({
  baseURL: "https://openapi.gg.go.kr/GeneralCourierService",
  params: { type: "json", key: process.env.REACT_APP_FACTORY_KEY },
});
const factoryDB = new FactoryList(httpClient);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App factoryDB={factoryDB} />
  </React.StrictMode>
);
