const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html") //Can just use sendFile("index.html") but __dirname method is much safer to use on any other cloud server or other people's desktop. __dirname shows the current working directory of the folder
})

app.post("/", function (req, res) {

    var num1 = Number(req.body.n1)
    var num2 = Number(req.body.n2)

    var add = num1 + num2;
    var sub = num1 - num2;
    var mul = num1 * num2;
    var div = (num1 / num2).toFixed(2);

    res.send("Thanks for Submitting!<br>The Results of the calculation are as follows:-<br>Addition : " + add + "<br>Subtraction : " + sub + "<br>Multiplication : " + mul + "<br>Division : " + div)
})

app.get("/bmiCalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmiCalculator", function (req, res) {

    var h = (parseFloat(req.body.height)) / 100;
    var w = parseFloat(req.body.weight);
    var bmi = (w / (h * h)).toFixed(2);

    res.send("Your BMI is " + bmi)

})

app.listen(3000, function () {
    console.log("Server is running on port 3000.")
});