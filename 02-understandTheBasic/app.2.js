const http = require("http");
const server = http.createServer((req, res) => {
  console.log(`request url ${req.url}`);
  console.log(`request method ${req.method}`);
});
const port = 3000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
