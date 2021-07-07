const express = require("express");
const mongoose = require("mongoose");
const Item = require("./04-quickOverview-builTodoApp/models/items");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

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
  res.redirect("/get-items");
});

app.get("/get-items", (req, res) => {
  Item.find()
    .then((result) => {
      res.render("index", { items: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/add-item", (req, res) => {
  res.render("add-item");
});

app.post('/items', (req, res) => {
  console.log(req.body);
  const item = Item(req.body)
  item.save().then(() => {
    res.redirect('/get-items')
  }).catch(err => {console.log(err)})
})

app.get('/items/:id', (req, res) => {
  const id = req.params.id;
  Item.findById(id).then(result => {
    console.log('result', result);
    res.render('item-detail', { item: result })
  })
})

app.delete('/items/:id', (req, res) => {
  const id = req.params.id;
  Item.findByIdAndDelete(id).then(result => {
    res.json({redirect: '/get-items'})
  })
})

app.put('/items/:id', (req, res) => {
  const id = req.params.id;
  Item.findByIdAndUpdate(id, req.body).then(result => {
    res.json({msg: 'Update Succefully'})
  })
})

app.use((req, res) => {
  res.render("error");
});
