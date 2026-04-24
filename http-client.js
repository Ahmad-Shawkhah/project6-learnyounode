// Exercise 7: HTTP CLIENT
// I need to make an HTTP GET request to a URL and print the response.
// The URL is passed as a command-line argument: process.argv[2]
// I used the built-in http module that comes with Node.js.
// Source: https://nodejs.org/api/http.html#httpgetoptions-callback

const http = require("http");

// http.get sends a GET request to the URL
// The callback runs when the server starts responding
http.get(process.argv[2], function(response) {
  // Set encoding so we get text instead of raw data
  response.setEncoding("utf8");

  // The "data" event fires each time a chunk of data arrives
  response.on("data", function(chunk) {
    console.log(chunk);
  });

  // to handle any errors

  response.on("error", function(err) {
    console.error(err);
  });
});