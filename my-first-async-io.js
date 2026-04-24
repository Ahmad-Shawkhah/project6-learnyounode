// Exercise 4: MY FIRST ASYNC I/O!
// Same as exercise 3 but now I have to read the file asynchronously.
// This means Node.js doesn't wait for the file - it keeps going and
// runs my callback function when the file is ready.
// Source: https://nodejs.org/api/fs.html#fsreadfilepath-options-callback

const fs = require("fs");

// readFile is the async version - it takes a callback function
// The callback runs when the file is done loading
fs.readFile(process.argv[2], "utf8", function(err, contents) {
  // If something went wrong, throw the error
  if (err) {
    throw err;
  }

  // Count the lines the same way as before
  const lineCount = contents.split("\n").length - 1;

  console.log(lineCount);
});