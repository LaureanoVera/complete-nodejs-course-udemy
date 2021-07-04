const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<h3>Welcome to LauriWeb</h3>");
  res.write('<p>This is nodejs course</p>')
  res.end();
});
const port = 3000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
