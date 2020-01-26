//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function(req, res){
    //console.log(req);
    res.send("Welcome to my server homepage");
});

app.get("/contact", function(req, res){
    
    res.send("<h1>You can contact me via the contact form<h1>");
});

app.get("/about", function(req, res){
    
    res.send("<h1>Welcome to my server about page</h1>");
});

app.listen(3000, function(){
    console.log("Starting app on port 3000")
});

