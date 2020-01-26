// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    // res.send("<h1>Calculator app</h1>");
    res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function(req, res){
    // res.send("<h1>Calculator app</h1>");
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
    //console.log(req.body.num1);
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1+num2;
    res.send("<h1>The result of the calculation is " + result + "</h1> <a href='http://localhost:3000/'>Home</a>");
    //res.sendFile(__dirname + "/index.html");
});

app.post("/bmiCalculator", function(req, res){
    //console.log(req.body.num1);
    let h = Number(req.body.height);
    let w = Number(req.body.weight);
    let result = w / (h*h);
    res.send("<h1>The result of the calculation is " + result + "</h1> <a href='http://localhost:3000/'>Home</a> <a href='http://localhost:3000/bmiCalculator'>Back</a>");
    //res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
    console.log("Starting calculator app in port 3000");
});