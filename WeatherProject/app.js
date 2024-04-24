const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.post('/', function (req, res) {
    const first = req.body.cityName.slice(0, 1).toUpperCase();
    const remaining = req.body.cityName.slice(1, 99);
    const query = first + remaining;
    const apiKey = "8954fea5ed6ce676bbb784623178e0ce";
    const units = "metric";
    // const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + units + "&appid=" + apiKey;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${units}&appid=${apiKey}`;
    https.get(url, function (response) {
        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURl = "http://openweathermap.org/img/wn/" + icon + "@4x.png";
            res.write("<h1>The Weather is currently " + desc + "</h1>");
            res.write("<h3>The Temperature in " + query + " is " + temp + " degrees celcius.</h3>");
            res.write("<img src=" + imageURl + ">");
            res.send();
        })
    })
})
app.listen(3000, function () {
    console.log("Server is running in port 3000")
})