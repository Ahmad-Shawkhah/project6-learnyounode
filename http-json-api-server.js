// Exercise 13: HTTP JSON API SERVER
// I need to create an HTTP server with two endpoints that return JSON.
// Source: https://nodejs.org/api/url.html


const http = require("http");
const url = require("url");

const server = http.createServer(function(request, response) {
  // Parse the URL to get the path and query string

  const parsedUrl = url.parse(request.url, true);
  const pathname = parsedUrl.pathname;

  // Convert the iso query string into a JavaScript Date object
  const date = new Date(parsedUrl.query.iso);

  let result = null;

  if (pathname === "/api/parsetime") {
    // Return the hour, minute, and second from the date
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  } else if (pathname === "/api/unixtime") {
    // getTime() returns milliseconds since January 1st 1970
    result = {
      unixtime: date.getTime()
    };
  }

  if (result) {
    // Send back JSON with the correct content type header
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(result));
  } else {
    response.writeHead(404);
    response.end();
  }
});

server.listen(Number(process.argv[2]));