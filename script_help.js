const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
client.on('ready', () => {

    console.log("[" + time +"] [FM] LOADED FILE - script_help.js ");
  
  
  })    



  client.on('message', message => {

    if(message.content === "--help"){


        var embed = new MessageEmbed()
        .setDescription("**--embed** - Odesílání embed zprávy (upozornění)\n**--stats** - statistiky");

        message.channel.send(embed);

    }




      
  }) 

  
  client.login('NzcxNjY0OTQ5NDQ5MDY0NDQ5.X5va_A.HaCNx77HzNAZ27nDy93CGnkRqQ8');