const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
   
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});
  
bot.on('message', message => {
  bot.on('ready', () => {
  bot.user.setGame('Reset System, h!help')
  
var userData = JSON.parse(fs.readFileSync('jsonPointID/level.json', 'utf-8'));
var sender = message.author;
var msg = message.content.toUpperCase();
var prefix = 'h!'
  
  
//if (msg === prefix + 'MESSAGESTATS') {
  //  message.channel.send('Vous avez envoyé **' + userData[sender.id].messagesSent + '** messages !' )
//}
 
if (msg === prefix + 'help') {
    message.channel.send('la commande ">messagestats" sert a voir le nombre de message que vous avez envoyé au total sur ce serveur.')
}
  
if (!userData[sender.id]) userData[sender.id] = {
    messagesSent: 0
}
 
 
 
userData[sender.id].messagesSent++;
 
if (msg === prefix + 'MESSAGESTATS') {
 
message.channel.send({embed: {
    title: "Total de messages envoyé",
    description: "Messages envoyé au total : " + userData[sender.id].messagesSent ,
    color: "3447003"
}})
 
}
 
fs.writeFile('jsonPointID/level.json', JSON.stringify(userData), (err) => {
    if (err) console.error(err);
});
  
});
 
    bot.login(process.env.TOKEN);
