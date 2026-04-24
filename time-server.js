// Exercise 10: TIME SERVER
// I need to create a TCP server that listens on a port and sends
// the current date and time to anyone who connects to it.
// The format has to be: YYYY-MM-DD HH:MM
// Source: https://nodejs.org/api/net.html#netcreateserveroptions-connectionlistener

const net = require("net");

// Helper function to add a leading zero to single digit numbers

function pad(num) {
  return String(num).padStart(2, "0");
}

// Create a TCP server -- runs the callback for every new connection
const server = net.createServer(function(socket) {
  const now = new Date();

  // Build the dat string in the required format
  const dateStr = now.getFullYear() + "-" +
    pad(now.getMonth() + 1) + "-" +
    pad(now.getDate()) + " " +
    pad(now.getHours()) + ":" +
    pad(now.getMinutes());

  // Send the date and close the connection
  socket.end(dateStr + "\n");
});

// Start listening on the port from command line
server.listen(Number(process.argv[2]));