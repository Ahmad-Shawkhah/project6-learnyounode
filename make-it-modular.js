// Exercise 6: MAKE IT MODULAR
// I require my own module using ./ to tell Node it's a local file.
// Source: https://nodejs.org/api/modules.html

const filterFiles = require("./mymodule");

filterFiles(process.argv[2], process.argv[3], function(err, files) {
  if (err) {
    throw err;
  }



  files.forEach(function(file) {
    console.log(file);
  });
});