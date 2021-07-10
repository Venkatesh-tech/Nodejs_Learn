//fs module operations from nodejs documentation
const fs = require("fs");

//fs read operation
// fs.readFile("second.js", "utf8", (err, data) => {
//   console.log(err, data);
// });

// const a = fs.readFileSync("second.js");
// console.log(a.toString());

// fs write opeartion
fs.writeFile("fs.txt", "This is data", () => {
  console.log("writeen to the file");
});

console.log("Finished Reading File");
