const Discord = require('discord.js');

const TOKEN = 'NDI5MDc1NzY5MjM5NjY2NzA0.DZ8d4Q.jeMzLw4uiAjZf4-wiUojBNWMl1U';

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log('Ready');
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Miku") {
        message.channel.sendMessage("Miku Desu!");
    }
});

bot.login(TOKEN);