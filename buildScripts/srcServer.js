// call express - ES5
/*
var express = require('express');
var path = require('path');
var open = require('open');
*/
import express from 'express';
import path from 'path';
import open from 'open';

//BUNDLE// import web pack and its local config
import webpack from 'webpack';
import config from '../webpack.config.dev';

//ES5// var port = 3000;
const port = 3000;

// create an instance
//ES5// var app = express();
const app = express();

// web pack bundle
const compiler = webpack(config);

// tell express to user webpack-dev-middleware
// config.output.publicPath - variable from the config file
app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath: config.output.publicPath
}));

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
