// Exercise 2: BABY STEPS
// Sum all numbers passed as command-line arguments and print the result.
// process.argv is an array of all command-line arguments.
// Index 0 = node, Index 1 = file path, Index 2+ = our numbers.
// Source: https://nodejs.org/api/process.html#processargv

let sum = 0;

for (let i = 2; i < process.argv.length; i++) {
  // Convert each argument from string to number before adding
  sum += Number(process.argv[i]);
}

console.log(sum);