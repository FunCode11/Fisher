require('dotenv').config();
const http = require('http');
require('./index.js')
require('./deploy_commands.js')
console.log(`Running Node.js version: ${process.version}`);

const port = process.env.PORT || 3000;
const host = '0.0.0.0'; // Important for external access

// Create an HTTP server to listen on port 3000
http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot is running!');
  })
  .listen(port, host, () => {
    console.log(`Server is ready and listening on ${host}:${port}`);
  });
