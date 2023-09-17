var express = require('express');
var app = express();

app.get('/home', function(req, res) {
    console.log("Got a GET request for the homepage");
    res.send("Hello GET");

})

app.post('/create', function(req, res){
    console,log("Got a POST Request");
    res.send("Create Content");
})
// Create Server

var Server = app.listen(3000, function(){
    var host = Server.address().address
    var port = Server.address().port
    console.log("Server Listening at http://%s:%s", host, port)
})