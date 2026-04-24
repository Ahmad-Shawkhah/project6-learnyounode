// Exercise 8: HTTP COLLECT
// Similar to exercise 7 but now I need to collect all the data first
// I also need to print the total character count.
// Source: https://nodejs.org/api/http.html

const http = require("http");

http.get(process.argv[2], function(response) {
  response.setEncoding("utf8");

  // I use a variable to ccollect all the chunks together
  let fullData = "";

  response.on("data", function(chunk) {
    // Keep adding each chunk to the full string
    fullData += chunk;
  });

  // The "end" event fires when all data has been received
  response.on("end", function() {
    // Print total number of characters first, then the full response
    console.log(fullData.length);
    console.log(fullData);
  });

  response.on("error", function(err) {
    console.error(err);
  });
});