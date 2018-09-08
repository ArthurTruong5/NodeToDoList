// Module
var express = require('express');
// Invoke the function
var app = express();

mongoose.connect('mongodb://test:zanetti1@ds249942.mlab.com:49942/nodetodolist')

// Run localhost3000
var port = process.env.PORT || 3000;

// For Front End eg angular, css etc - Creating public assets folder
app.use('/assets',express.static(__dirname + '/public'));

// View Engine - using template engine to output HTML code with JavaScript
app.set('view engine', 'ejs');

// Connect to PORT
app.listen(port);
