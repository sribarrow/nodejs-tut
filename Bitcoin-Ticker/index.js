//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

    // console.log(req.body.crypto);
    // console.log(req.body.fiat);

    let symbol = req.body.crypto + req.body.fiat;
    console.log(symbol);

    request('https://apiv2.bitcoinaverage.com/indices/global/ticker/'+ symbol, function (error, response, body) {
        let obj = JSON.parse(body);
        console.log(obj.averages.week);
        res.write("<h1>Data valid as on " + obj.display_timestamp + "</h1> <hr> ");
        res.write("<h4>Ask price " + obj.ask + "</h4> ");
        res.write("<h4>Bid price " + obj.bid + "</h4> ");
        res.write("<a href='http://localhost:3000/'>Home</a>");
        res.send();
    });
    
});

app.listen(3000, function () {
    console.log("Starting calculator app in port 3000");
});