import React, { memo } from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./app";
import axios from "axios";
import FactoryList from "./service/factoryList";
import AuthService from "./service/auth_service";
import ImageFileInput from "./components/imageFileInput/image_file_input";
import imageUploader from "./service/image_uploader";

const httpClient = axios.create({
  baseURL: "https://openapi.gg.go.kr/GeneralCourierService",
  params: { type: "json", key: process.env.REACT_APP_FACTORY_KEY },
});
const factoryDB = new FactoryList(httpClient);
const authService = new AuthService();
const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      FileInput={FileInput}
      factoryDB={factoryDB}
      authService={authService}
    />
  </React.StrictMode>
);
