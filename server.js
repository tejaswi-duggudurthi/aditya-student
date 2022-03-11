var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send("home screen");
});
app.get('/about',function(req,res){
    res.send("about screen");
});
  
app.listen(3000);









// var http = require('http');

// http.createServer(function(req,res){
//     res.writeHead(200,{'content-Type':'text/html'});
//     res.end("hello world!");

// }).listen(3000);