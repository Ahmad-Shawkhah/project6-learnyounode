// Exercise 11: HTTP FILE SERVER
// I need to create an HTTP server that serves a single file for every request.
// The port comes from process.argv[2] and the file path from process.argv[3].
// I use pipe() to stream the file directly into the response.
// Source: https://nodejs.org/api/fs.html#fscreatereadstreampath-options



const http = require("http");
const fs = require("fs");


const server = http.createServer(function(request, response) {
  // Create a read stream for the file and pipe it into the response
  fs.createReadStream(process.argv[3]).pipe(response);
});

// Listen on the port passed from the command line
server.listen(Number(process.argv[2]));