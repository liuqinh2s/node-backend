// index.js

var express = require("express");
var app = express();
app.get("/", function (req, res) {
  res.send("Hello world!");
});
app.listen(3000);
console.log("server started");
console.log("address: http://localhost:3000");
