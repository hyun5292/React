import React, { memo } from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./app";
import axios from "axios";
import FactoryList from "./service/factoryList";
import AuthService from "./service/auth_service";
import FirebaseImg from "./service/firebase_image";

const httpClient = axios.create({
  baseURL: "https://openapi.gg.go.kr/GeneralCourierService",
  params: { type: "json", key: process.env.REACT_APP_FACTORY_KEY },
});
const factoryDB = new FactoryList(httpClient);
const authService = new AuthService();
const firebaseImg = new FirebaseImg();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      firebaseImg={firebaseImg}
      factoryDB={factoryDB}
      authService={authService}
    />
  </React.StrictMode>
);
