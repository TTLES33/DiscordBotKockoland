const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');



client.on('ready', () => {

    console.log("[File Manager] LOADED FILE - script_commands.js ");
  
  
  })    

  client.on('message', message => {

if(message.channel.id !== '364732638369415169'){
    if(message.content.startsWith('=play') || message.content.startsWith('=queue') || message.content.startsWith('=skip') || message.content.startsWith('=purge') || message.content.startsWith('=rank')) {
        var autor = message.autor;
    var text = ',příkazy k botům piš do roomky bot-commands';
    var text2 = 'Příkazy k botovi <@185476724627210241> piš do roomky <#364732638369415169>';
    var groovyembed  = new MessageEmbed()
    .setTitle(autor+text)
    .setDescription(text2)
    .setColor(14483456);
    message.channel.send(groovyembed);
    }}

});


    
    client.login('NzcxNjY0OTQ5NDQ5MDY0NDQ5.X5va_A.HaCNx77HzNAZ27nDy93CGnkRqQ8');