require('dotenv').config();
const http = require('http');
const { Client, GatewayIntentBits } = require('discord.js');

// Create an HTTP server to listen on port 3000
const port = process.env.PORT || 3000;
http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot is running!');
  })
  .listen(port, () => {
    console.log(`Server is ready and listening on port ${port}`);
  });

// Initialize the Discord bot
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  console.log('Discord bot is online!');
});

// Log in to Discord using the token from the .env file
client.login(process.env.DISCORD_TOKEN);

// Handle errors
client.on('error', (error) => {
  console.error('Discord client encountered an error:', error);
});
