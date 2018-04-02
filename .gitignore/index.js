const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', function() => {
  client.user.setGame('Reset System, h!help')
  console.log('Logged in as ${client.user.tag}!');
});

bot.login(process.env.TOKEN)
