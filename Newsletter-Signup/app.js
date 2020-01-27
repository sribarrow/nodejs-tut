//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});
//mail chimp api 4cd9034d6dc4988e1a7175e38ac8a2a4-us4
// audience id 709c02c9d8


app.post("/", function(req, res){
   let fname = req.body.fname;
   let lname = req.body.lname;
   let email = req.body.email;
   //console.log("Well done! "+ fname + ", you are now subscribed to our news letter.")
    let data = {
        members: [
            {email_address: email,
             status: "subscribed",
             merge_fields: {
                 FNAME: fname,
                 LNAME: lname
             }
            }
        ]
    }
    jsonData = JSON.stringify(data);

    let options = {
        url: "https://us4.api.mailchimp.com/3.0/lists/709c02c9d8",
        method: "POST",
        headers: {
            "Authorization": "sribarrow 4cd9034d6dc4988e1a7175e38ac8a2a4-us4"
        },
        body: jsonData
    };
   request(options,function(error, response, body ){
       if(error){
           console.log(error);
       } else {
           console.log(response.statusCode);
       }
   });
   
    res.send("<h1>Well done! "+ fname + ", you are now subscribed to our news letter.</h1>");

});

app.listen(3000, function(){
    console.log("App Server is running in port 3000.")
});

