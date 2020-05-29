var express = require("express")

var app = express();

var d3= require("d3");

app.use(express.static(__dirname + '/public'))

app.get("/", function(req, res){
    res.render("home2.ejs");
})

app.listen(process.env.PORT || 3000, function(req, res){
    console.log("Server Started!");
})