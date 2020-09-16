//app.js

var express = require("express");
 var app = express();
 var port = 3000;

 app.get("/" , function(req, res){
     res.send('<a href="/hello">Hello Page</a>');
 });
 
 app.get("/hello" , function(req, res){
    res.send("Hello AA08");
});

app.get("/comsi" , function(req, res){
    res.send("Helloo Comsi!!");
});
app.get("/aa08" , function(req, res){
    res.send("Hello aa08, comsi! My first express server!!!!!!!!!!!!");
});
var server = app.listen(port, function(){

    console.log("Listening on port %d", server.address().port)
});