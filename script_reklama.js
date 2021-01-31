const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

client.on('ready', () => {

    console.log("[File Manager] LOADED FILE - script_reklama.js ");

  
  
  })    


client.on('message', message => {
    if (message.content.includes("discord.gg/" )){
      if(message.author.bot) return;
              //                                                     Admin                                                                  Moderator                                                                 Dis Admin                                                          Grafik                                                                   MOderator                                                           Helper                                                                      Stavitel 
              if(message.member.roles.cache.some(r => r.id === "333666754943516674") || message.member.roles.cache.some(r => r.id === "333666817346371586") || message.member.roles.cache.some(r => r.id === "521688250562248724") || message.member.roles.cache.some(r => r.id === "735203698560467061")  || message.member.roles.cache.some(r => r.id === "333666817346371586") || message.member.roles.cache.some(r => r.id === "333666886451724299") || message.member.roles.cache.some(r => r.id === "735220759923785768") ) {

     



        }else{ 
      
      var embed = new MessageEmbed()
      .setTitle("Relama na konkurenční Discord servery není povolena")
      .setColor(14483456);
      message.author.send(embed);


      var embed = new MessageEmbed()
      .setTitle("❌ Reklama ❌")
      .setDescription("<@" + message.author + "> v <#" + message.channel + "> odeslal zprávu obsahující reklamu\n ↓↓ originální zpráva ↓↓");


      client.channels.cache.get('772909666601533450').send(embed);
      client.channels.cache.get('772909666601533450').send(message.content);
    
      message.delete();
    
    
      
    }}
    
    })


    client.login('NzcxNjY0OTQ5NDQ5MDY0NDQ5.X5va_A.HaCNx77HzNAZ27nDy93CGnkRqQ8');