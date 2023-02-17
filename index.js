const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

const companyRoutes = require("./routes/companyRoute");
const interviewRoutes = require("./routes/interviewRoute");

const app = express();
mongoose.set("strictQuery", false);

const username = "admin";
const password = "welcome%40123";
const cluster = "windsor-cluster";

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api", companyRoutes);
app.use("/api", interviewRoutes);

mongoose.connect(
  `mongodb+srv://${username}:${[
    password,
  ]}@windsor-cluster.qufpjwv.mongodb.net/lancer_view_db?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", function () {
  console.log("MongoDB connected successfully");
  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
});
