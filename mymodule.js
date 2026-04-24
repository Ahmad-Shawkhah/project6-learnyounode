// This is a separate module that handles filtering files by extension.
// I put this logic in its own file to keep the code organized and reusable.
// Source: https://nodejs.org/api/modules.html

const fs = require("fs");
const path = require("path");

// module.exports lets me share this function with other files
module.exports = function(dirPath, extension, callback) {
  fs.readdir(dirPath, function(err, files) {
    if (err) {
      return callback(err);
    }

    // Filter files that match the given extension
    const filtered = files.filter(function(file) {
      return path.extname(file) === "." + extension;
    });

    // Pass the results back through the callback
    callback(null, filtered);
  });
};