const cors = require("cors");
const express = require("express");
const path = require("path");

const fetchAPI = require("./meaningCloud");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("dist"));

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

app.post("/submit", async (req, res) => {
  const userInput = req.body;

  try {
    const apiData = await fetchAPI(userInput);
    sentimentAnalysis = JSON.stringify(apiData);
    res.status(200).send(sentimentAnalysis);
  } catch (e) {
    res.status(400).send(e);
  }
});

const port = 8080;
app.listen(process.env.PORT || port, function () {
  console.log(`App listening on port ${port}`);
});
