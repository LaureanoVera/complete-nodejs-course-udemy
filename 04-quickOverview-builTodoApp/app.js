const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<p>Home Page</p>");
});

app.get('/add-item', (req, res) => {
  res.send("<p>Add Items</p>");
})

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
