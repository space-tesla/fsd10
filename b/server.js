// server.js

const http = require('http'); // Built-in HTTP module
const myModule = require('./modules'); // Custom module

const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Get current date and time using your module
  const dateTime = myModule.getCurrentDateTime();

  // Display it
  res.write(`<h1>Current Date and Time:</h1><p>${dateTime}</p>`);
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
