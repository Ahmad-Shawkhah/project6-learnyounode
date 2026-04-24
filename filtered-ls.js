// Exercise 5: FILTERED LS
// I need to list all files in a folder that match a given extension.
// process.argv[2] = the folder path, process.argv[3] = the extension (like "txt")
// I used the built-in fs and path modules to do this.
// Source: https://nodejs.org/api/fs.html#fsreaddirpath-options-callback

const fs = require("fs");
const path = require("path");

// Read all files in the directory asynchronously
fs.readdir(process.argv[2], function(err, files) {
  if (err) {
    throw err;
  }

  // Loop through each file and only print ones that match the extension
  files.forEach(function(file) {
    // path.extname gets the extension of a file like ".txt"
    if (path.extname(file) === "." + process.argv[3]) {
      console.log(file);
    }
  });
});