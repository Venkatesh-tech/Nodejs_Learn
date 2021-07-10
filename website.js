//http operations from nodejs documentation
const { Console } = require("console");
const fs = require("fs");
const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statuscode = 200;
  res.setHeader("Content-Type", "text/html");
  console.log(req.url);
  if (req.url == "/") {
    res.statuscode = 200;
    res.end("<h1>This is Venkatesh</h1>");
  } else if (req.url == "/about") {
    res.statuscode = 200;
    res.end("<h1>About Venkatesh</h1>");
  } else if (req.url == "/hello") {
    res.statuscode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else {
    //res.venkatesh();
    res.statuscode = 404;
    res.end("<h1>Not Found</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
