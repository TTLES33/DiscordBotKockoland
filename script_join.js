const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
client.on('ready', () => {

    console.log("[File Manager] LOADED FILE - script_join.js ");
  
  
  })    


client.on("guildMemberAdd", (member) => {


    var t1 ='<@';
    var t2 = '>';
    var t3 = t1 + message.author + t2;
    var t4 = '\n Na serveru se musíš řídit [pravidy Kockolandu](http://kockoland.sk/pravidla/)'
    var vitej = '**Vítej** ';
    var welocmeEmbed = new MessageEmbed()
  
    .setDescription(vitej + t3 + t4)
    .setTitle('Vítej na Discord Serveru Kockoland')
    .setColor(11337728);
  
    var welocmeEmbed2 = new MessageEmbed()
  
    .setDescription('> Veškeré problémy se serverem řeš v roomce <#615422558648401953> \n> Novinky na serveru uvidíš v roomce <#544068287030362145> \n> příkazy k Music botovi <@185476724627210241> piš do roomky <#364732638369415169>\n\n\n     **Příkazy k Music Botovi:**\n>     =join - Připojí bota do hlasové roomky\n>      =play [název písničky] - přehraje písničku\n>      =queue - Zobrazí frontu písniček\n>      =skip - přeskočí aktuálně hrající písničku\n>      =purge - vymaže všechny písničky z fronty')
    .setTitle('Organizace Serveru')
    .setColor(49919);
  
    var welocmeEmbed3 = new MessageEmbed()
  
    .setDescription('**Příkazy k Music Botovi:**\n>      `=join` - Připojí bota do hlasové roomky\n>      `=play` [název písničky] - přehraje písničku\n>      `=queue` - Zobrazí frontu písniček\n>      `=skip` - přeskočí aktuálně hrající písničku\n>      `=purge` - vymaže všechny písničky z fronty ')
  
    .setColor(11337728);
  
    client.channels.cache.get('772909666601533450').send(welocmeEmbed);
    client.channels.cache.get('772909666601533450').send(welocmeEmbed2);
  
  
  
  
  
  }) 

  
  client.login('NzcxNjY0OTQ5NDQ5MDY0NDQ5.X5va_A.HaCNx77HzNAZ27nDy93CGnkRqQ8');