//Events operations from nodejs documentation
const EventEmitter = require("events");

//events operations from nodejs documentation
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("waterFull", () => {
  console.log("Please turn off motor");
  setTimeout(() => {
    console.log("Turn off motor");
  }, 3000);
});

console.log("The script is running");
myEmitter.emit("waterFull");
console.log("The script is still running");
