const express = require("express");
const https = require("https");
const dotenv = require("dotenv");
const path = require("path");


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const urlOpenWeather = "https://api.openweathermap.org/data/2.5/weather?q=großwarasdorf&appid=" + process.env.API_ID + "&units=metric";

console.log(urlOpenWeather);

app.get(("/"), function(req, res) {

  https.get(urlOpenWeather, function(response){
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    response.on("data", function(data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
      const weatherDescription = weatherData.weather[0].description;
      console.log("Temp:", temp);
      console.log("Description: ", weatherDescription);

      // res.write("The temperature in Grosswarasdorf is " + Math.round(temp) + "° C");
      // res.write("The weather is currently " + weatherDescription + "");
      // res.write(`<img src=" + imageURL + ">`);
      res.send("<h1>The temperature in Grosswarasdorf is " + Math.round(temp) + "° C</h1></br><h2>The weather is currently " + weatherDescription + "</h2></br><img src=" + imageURL + ">");
    });
  })
  
})

app.listen(PORT, function() {
  console.log('Server started on PORT ' + PORT);
  // console.log('Nodejs version is ' + process.version);
  console.log('Press Ctrl+C to quit.');
})

