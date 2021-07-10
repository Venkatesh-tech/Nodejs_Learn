//http operations from nodejs documentation
const { Console } = require("console");
const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statuscode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>This is Venkatesh</h1>");
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
