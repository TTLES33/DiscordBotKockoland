const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const mysql = require('mysql');
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
client.on('ready', () => {

    console.log("[" + time +"] [FM] LOADED FILE - script_reklama.js ");

  
  
  })    


client.on('message', message => {
    if (message.content.includes("discord.gg/" )){
      if(message.author.bot) return;
              //                                                     Admin                                                                  Moderator                                                                 Dis Admin                                                          Grafik                                                                   MOderator                                                           Helper                                                                      Stavitel 
             //if(message.member.roles.cache.some(r => r.id === "333666754943516674") || message.member.roles.cache.some(r => r.id === "333666817346371586") || message.member.roles.cache.some(r => r.id === "521688250562248724") || message.member.roles.cache.some(r => r.id === "333666817346371586") || message.member.roles.cache.some(r => r.id === "333666886451724299") || message.member.roles.cache.some(r => r.id === "735220759923785768") ) {
          if(message.member.roles.cache.get("333666817346371586")){    
     



        }else{ 
      
      var embed = new MessageEmbed()
      .setTitle("Relama na konkurenční Discord servery není povolena")
      .setColor(14483456);
      message.author.send(embed);


      var embed = new MessageEmbed()
      .setTitle("❌ Reklama ❌")
      .setDescription("<@" + message.author + "> v <#" + message.channel + "\n  [WebAdmin](http://ttles.space/kockoland/)");
     


      client.channels.cache.get('772909666601533450').send(embed);
      client.channels.cache.get('772909666601533450').send(message.content);
    
      message.delete();

      var original_message = message.content;
      var nick = message.author;

      const host= "database-ttles.cr2b8qefitxx.us-east-2.rds.amazonaws.com";
      const user = "admin";
      const password ="pristupoveheslo";
      const database = "kockoland";
    
    var con = mysql.createConnection({
      host: host,
      user: user,
      password: password,
      database: database
    });

  con.connect(function(err) {
    if (err) throw err;
  
    var sql = "INSERT INTO reklama (nick, original_message) VALUES ('" + nick + "', '" + original_message + "')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      con.end();
    });

    
  });
    
    
      
    }}
    
    })


    client.login('NzcxNjY0OTQ5NDQ5MDY0NDQ5.X5va_A.HaCNx77HzNAZ27nDy93CGnkRqQ8');