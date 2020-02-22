
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.channels.get(`612739823681404938`).send(`LuciousBot is now Online!`);
});
process.on('beforeExit', (code) => {
    console.log("bye");
    console.log(client);
  //client.channels.get(`612739823681404938`).send(`LuciousBot is now Offline!`);
});
process.on('SIGINT', () => {
     console.log("bye");
    console.log(client);
  client.channels.get(`612739823681404938`).send(`LuciousBot is now Offline!`);
});

/*process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});

console.log('This message is displayed first.');*/

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
  if (msg.content === 'gay') {
    msg.reply('https://tenor.com/view/reverse-nozumi-uno-jojo-card-gif-15706915');
  }
  if (msg.content === '!hell') {
	msg.reply(randomReply())
  }
});

client.login('NjgwNjQxNjU3Njc0MTM3NjAz.XlDlJA.ffLw13Ogc_CCogoeqRaDpdLhKXA');



function randomReply() {

var myArray = [

    "*Do not be afraid of those who kill the body but cannot kill the soul. Rather, be afraid of the One who can destroy both soul and body in hell.* Matthew 10:28",
    "*You snakes! You brood of vipers! How will you escape being condemned to hell?* Matthew 23:33",
    "*hell is empty, the demons are here.*",
    "*i stopped fighting my demons, They are part of me now*",
    "*Demons, i understand. People? they scare me.*",
];
let index = Math.floor(Math.random()*myArray.length)
console.log(index)
return randomItem = myArray[index];
}