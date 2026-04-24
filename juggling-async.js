// Exercise 9: JUGGLING ASYNC
// I need to make 3 HTTP requests at the same time but print the results
// in the correct order (argv[2] first, argv[3] second, argv[4] third).
// The trick is to store results in an array by index so order is preserved.
// Source: https://nodejs.org/api/http.html

const http = require("http");

// Array to store each response in the right position
const results = [];
let completedCount = 0;

// This function fetches a URL and stores the result at a specific index
function fetchUrl(url, index) {
  http.get(url, function(response) {
    response.setEncoding("utf8");

    let data = "";

    response.on("data", function(chunk) {
      data += chunk;
    });

    response.on("end", function() {
      //store the result at the correct index to preserve order
      results[index] = data;
      completedCount++;


      
      // Only print when all 3 requests are done
      if (completedCount === 3) {
        results.forEach(function(result) {
          console.log(result);
        });
      }
    });
  });
}


// Start all 3 requests at the same time
fetchUrl(process.argv[2], 0);
fetchUrl(process.argv[3], 1);
fetchUrl(process.argv[4], 2);