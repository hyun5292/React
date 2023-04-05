import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./app";
import axios from "axios";
import stepsData from "./db/stepsData.json";
import Youtube from "./service/youtube";

const httpClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});
const youtube = new Youtube(httpClient);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App stepsData={stepsData} youtube={youtube} />
  </React.StrictMode>
);
