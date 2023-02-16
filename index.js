const express = require('express')
const mongoose = require('mongoose')

const companyRoutes = require('./routes/companyRoute');

const app = express()
mongoose.set('strictQuery', false)

const username = "admin"
const password = "welcome%40123"
const cluster = "windsor-cluster"

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/api', companyRoutes)

mongoose.connect(
  `mongodb+srv://${username}:${[password]}@windsor-cluster.qufpjwv.mongodb.net/lancer_view_db?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));

db.once("open", function () {
  console.log("MongoDB connected successfully");
  app.listen(3000, ()=> {
    console.log("Listening on port 3000");
  })
});

