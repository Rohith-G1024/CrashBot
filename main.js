const Discord = require('discord.js');

const client = new Discord.Client({intents:["GUILDS","GUILD_MESSAGES"]});

const prefix ='?'

const fs = require('fs');
const { config } = require('process');

const conf = require('./config.json');

client.commands = new Discord.Collection();

const cmdFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of cmdFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command)
}

client.once('ready', () => {
  console.log('Crashbot is online!');
});

client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return

  const args = message.content.slice(prefix.length).split(" ");
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
    client.commands.get('ping').execute(message,args)
  } else if(command === 'eros' || command === 'nishanth'){
      client.commands.get('eros').execute(message,args);
  } else if(command === 'modme')
      client.commands.get('modme').execute(message,args);
    else if(command === 'demod')
      client.commands.get('demod').execute(message,args);
    else if(command === 'command')
      client.commands.get('command').execute(message,args,Discord);
    else if(command === 'clear')
      client.commands.get('clear').execute(message, args);
    
});

//last line ()
client.login(conf.token);
