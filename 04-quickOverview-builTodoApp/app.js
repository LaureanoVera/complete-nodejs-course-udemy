const express = require("express");
const mongoose = require("mongoose");
const Item = require("../models/items");
const app = express();
const port = 3000;

// database
const user = "user_items";
const pass = "k0iiw52UQWbM5wRF";
const dbname = "item-database";
const mongodb = `mongodb+srv://${user}:${pass}@cluster0.tc0dq.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose
.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("DB connected");
  app.listen(port, () => {
    console.log(`Server on port ${port}`);
  });
})
.catch((err) => console.log(err));

// template engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  
});

app.get("/get-items", (req, res) => {
  Item.find().then((result) => {
    res.send(result)
    res.render('index', { items: result })
  }).catch(err => {console.log(err)})
});

app.get("/add-item", (req, res) => {
  res.render("add-item");
});

app.use((req, res) => {
  res.render("error");
});

