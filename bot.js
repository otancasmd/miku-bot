const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDI5MDc1NzY5MjM5NjY2NzA0.DZ8d4Q.jeMzLw4uiAjZf4-wiUojBNWMl1U);
