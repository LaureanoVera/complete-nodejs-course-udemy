const express = require("express");
const app = express();
const user = 'user_items';
const pass = 'k0iiw52UQWbM5wRF';
const dbname = 'item-database';
const mongodb = `mongodb+srv://${user}:${pass}@cluster0.tc0dq.mongodb.net/${dbname}?retryWrites=true&w=majority`;
const port = 3000;
app.set('view engine', 'ejs');


app.get("/", (req, res) => {
  const items = [
    {name: 'phone', price: 1000},
    {name: 'book', price: 30},
    {name: 'computer', price: 2000}
  ]
  res.render('index', { items });
});

app.get('/add-item', (req, res) => {
  res.render('add-item')
})

app.use((req, res) => {
  res.render('error')
})

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
