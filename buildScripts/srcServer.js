// call express
var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
// create an instance

var app = express();
// which route to process 
app.get('/', function(req, res) {
    // __dirname - current dirctory we are running in
    res.sendFile(path.join(__dirname, '../src/index.html'));
} )

// listen to the port above
app.listen(port, function(err){
    if(err) {
        // in case of error log it to the console
        console.log(err);
    } else {
        open('http://localhost:'+port);
    }
} )

// express is configured
