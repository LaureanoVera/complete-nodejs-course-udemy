const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  let route = "./view/";

  switch (req.url) {
    case "/":
      route += "index.html";
      res.statusCode = 200;
      break;
    case "/contact":
      route += "contact.html";
      res.statusCode = 200;
      break;
    case "/contact-us":
      res.setHeader('Location', '/contact')
      res.end()
      res.statusCode = 301;
      break;
    default:
      route += "404.html";
      res.statusCode = 404;
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
