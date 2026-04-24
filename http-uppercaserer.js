// Exercise 12: HTTP UPPERCASERER
// I need to create an HTTP server that receives a POST request,
// reads the body, converts it to uppercase, and sends it back.
// I use the through2-map package to transform the data as a stream.
// Source: https://github.com/rvagg/through2-map

const http = require("http");
const map = require("through2-map");

const server = http.createServer(function(request, response) {
  if (request.method === "POST") {

    // Pipe the request through a transform that uppercases each chunk
    // then pipethe result into the response
    request.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(response);
  }
});

server.listen(Number(process.argv[2]));