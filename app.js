const express = require("express");
const https = require("https");
const dotenv = require("dotenv");
const path = require("path");


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const urlOpenWeather = "https://api.openweathermap.org/data/2.5/weather?q=Vienna&appid=" + process.env.API_ID + "&units=metric";

console.log(urlOpenWeather);

app.get(("/"), function(req, res) {

  https.get(urlOpenWeather, function(response){
    console.log(response);
  })
  res.send("Server is up and running")
})

app.listen(PORT, function() {
  console.log('Server started on PORT ' + PORT);
  // console.log('Nodejs version is ' + process.version);
  console.log('Press Ctrl+C to quit.');
})

