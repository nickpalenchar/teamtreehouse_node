<<<<<<< HEAD
var router = require('./router');
//Problem: Need a simple way to look at a user's badge count and JavaScript points from a web browser.
//Solution: Use Node.js to perform the profile lookups and serve our template via HTTP

// Create a web server
var http = require('http');
var https = require('https');

http.createServer(function (request, response) {

    router.home(request, response);
    router.user(request, response);
  
}).listen(3000, '127.0.0.1'); //ommiting IP argument will cause function to listen to the internet

console.log('Server running at http://<workspace-url>');
=======
var profile = require("./profile");

process.argv.slice(2).forEach(profile.get);
>>>>>>> 3ddabab8d6acfbc278edc986faeadfdc8a2ac07b
