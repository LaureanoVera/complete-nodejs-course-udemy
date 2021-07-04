const http = require("http");
const server = http.createServer((req, res) => {
  console.log("A request is made");
});
const port = 3000;
// const hostname = "localhost";

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
