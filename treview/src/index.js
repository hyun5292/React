import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import "./index.module.css";
import App from "./app";
import FactoryList from "./service/factoryList";
import AuthService from "./service/auth_service";
import ReviewService from "./service/review_service";
import ImageUploader from "./service/ImageUploader";

const httpClient = axios.create({
  baseURL: "https://openapi.gg.go.kr/GeneralCourierService",
  params: { type: "json", key: process.env.REACT_APP_FACTORY_KEY },
});
const factoryDB = new FactoryList(httpClient);
const authService = new AuthService();
const reviewDB = new ReviewService();
const imgUploader = new ImageUploader();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      imgUploader={imgUploader}
      factoryDB={factoryDB}
      authService={authService}
      reviewDB={reviewDB}
    />
  </React.StrictMode>
);
