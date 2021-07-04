const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  let route = "./view/";

  switch (req.url) {
    case "/":
      route += "index.html";
      break;

    case "/contact":
      route += "contact.html";
      break;

    default:
      route += "404.html";
      break;
  }

  fs.readFile(route, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
