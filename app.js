const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", function(req, res) {
  res.send("Server is up and running")
})

app.listen(PORT, function() {
  console.log('Server started on PORT ' + PORT);
  // console.log('Nodejs version is ' + process.version);
  console.log('Press Ctrl+C to quit.');
})

