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

//2. Handle HTTP route GET /  and POST / i.e. Home

//4. Function that handles the reading of files and merge in values
  //read from file and get a string
    //merge values into string