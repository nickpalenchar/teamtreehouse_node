<<<<<<< HEAD
var EventEmitter = require("events").EventEmitter;
var http = require("http");
var https = require("https");
var util = require("util");

/**
 * An EventEmitter to get a Treehouse students profile.
 * @param username
 * @constructor
 */
function Profile(username) {

    EventEmitter.call(this);

    profileEmitter = this;

    //Connect to the API URL (http://teamtreehouse.com/username.json)
    var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
        var body = "";

        if (response.statusCode !== 200) {
            request.abort();
            //Status Code Error
            profileEmitter.emit("error", new Error("There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"));
        }

        //Read the data
        response.on('data', function (chunk) {
            body += chunk;
            profileEmitter.emit("data", chunk);
        });

        response.on('end', function () {
            if(response.statusCode === 200) {
                try {
                    //Parse the data
                    var profile = JSON.parse(body);
                    profileEmitter.emit("end", profile);
                } catch (error) {
                    profileEmitter.emit("error", error);
                }
            }
        }).on("error", function(error){
            profileEmitter.emit("error", error);
        });
    });
}

util.inherits( Profile, EventEmitter );

module.exports = Profile;
=======

//PROBLEM: We need a simple way to look at a user's badge count and JavaScript points
//SOLUTION: Use Node.js to connect to Treehouse's API to get profile information to print out
var http = require('https'); //**Teamtreehouse has changed their servers to "https" protocol**


function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript.";
  console.log(message);
}
//print out error messages
function printError(error) {
  console.error(error.message);
}

function get(username) {
  //connect to the API URL (http://teamtreehouse.com/username.json)
  var request = http.get('https://teamtreehouse.com/'+username+'.json', function(response){
    var body = "";
    response.on('data', function(chunk) {
      body += chunk;
    });
    
    response.on('end', function() {
      if(response.statusCode === 200) {
        try {
          var profile = JSON.parse(body);
          printMessage(username, profile.badges.length, profile.points.JavaScript);
        } catch(error) {
          printError(error);
        }
      } else {
        //Status Code Error
        printError({message: "There was an error getting the profile for " + username +". (no https status code)"}); //**There is not a .STATUS_CODES for "https" objects.
      }
     });
  }); 
  request.on('error', printError);
}


module.exports.get = get;
>>>>>>> 3ddabab8d6acfbc278edc986faeadfdc8a2ac07b
