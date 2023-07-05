const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2/promise");
const port = process.env.PORT || 3000;
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CORS_LINK,
    credentials: true,
  })
);

const db = mysql.createPool(require("./lib/config").user);

app.get("/", (req, res) => {
  res.send("Hello, Express");
});

app.post("/api/create", async (req, res) => {
  const { author, title, description } = req.body;
  const query =
    "INSERT INTO visitor_book(author, title, description) VALUES(?,?,?)";
  const target = [author, title, description];
  try {
    await db.query(query, target);
    res.send(true);
  } catch (err) {
    console.error(err);
  }
});

app.get("/api/get_post", async (req, res) => {
  const query = "SELECT * FROM visitor_book";
  try {
    const result = await db.query(query);
    res.json(result[0]);
  } catch (err) {
    console.error(err);
  }
});

app.post("/api/delete", async (req, res) => {
  const { id } = req.body;
  const query = "DELETE FROM visitor_book WHERE id=?";
  const target = [id];
  try {
    await db.query(query, target);
    res.send(true);
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  console.log("포트 3000번에서 실행중");
});
