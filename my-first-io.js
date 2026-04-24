// Exercise 3: MY FIRST I/O!
// I need to read a file and count how many lines are in it.
// The file path comes from the command line as the first argument.
// I used the fs module which lets Node.js work with files.
// Source: https://nodejs.org/api/fs.html

const fs = require("fs");

// readFileSync reads the whole file at once and waits until its done
const contents = fs.readFileSync(process.argv[2], "utf8");

// I split the text by newline to turn it into an array of lines
// then subtract 1 because the file ends with an empty newline
const lineCount = contents.split("\n").length - 1;

console.log(lineCount);