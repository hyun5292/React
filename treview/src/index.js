import React, { memo } from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./app";
import axios from "axios";
import FactoryList from "./service/factoryList";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/ImageUploader";

const httpClient = axios.create({
  baseURL: "https://openapi.gg.go.kr/GeneralCourierService",
  params: { type: "json", key: process.env.REACT_APP_FACTORY_KEY },
});
const factoryDB = new FactoryList(httpClient);
const authService = new AuthService();
const imageUploader = new ImageUploader();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      imageUploader={imageUploader}
      factoryDB={factoryDB}
      authService={authService}
    />
  </React.StrictMode>
);
