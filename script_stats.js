
const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
var mysql = require('mysql');

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

client.on('ready', () => {

  console.log("[" + time +"] [FM] LOADED FILE - script_stats.js ");


})    

    client.on('message', message => {            

        if(message.content === "--stats"){
        

        
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
               
          var hodnotaPokec;
          var hodnotaBot;
          var hodnotaChangelog;
          var hodnotaMemez;
          var hodnotaHelpdesk;
          var hodnotaEvent;
          
          
              con.connect(function(err) {
                  if (err) throw err;
                if (err)  client.channels.cache.get('772909666601533450').send(err);


                con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='online'", function (err, result, fields) {
                  if (err) throw err;
                   if (err)  client.channels.cache.get('772909666601533450').send(err);
                   if (err) throw err;
                 online_celkem = JSON.stringify(result[0].hodnota);
                 online =  Number(online_celkem);
                });

                 con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='celkem'", function (err, result, fields) {
                  if (err) throw err;
                   if (err)  client.channels.cache.get('772909666601533450').send(err);
                   if (err) throw err;
                 celkem_celkem = JSON.stringify(result[0].hodnota);
                 celkem =  Number(celkem_celkem);

                });
  
          
          
          
                con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='pokec'", function (err, result, fields) {
                   if (err) throw err;
                    if (err)  client.channels.cache.get('772909666601533450').send(err);
                    if (err) throw err;
                  hodnotaPokecstring = JSON.stringify(result[0].hodnota);
                  hodnotaPokec =  Number(hodnotaPokecstring);
          
          
                });
          
                con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='bot'", function (err, result, fields) {
                    if (err)  client.channels.cache.get('772909666601533450').send(err);
                    if (err) throw err;
                  hodnotaBotstring = JSON.stringify(result[0].hodnota);
                  hodnotaBot = Number(hodnotaBotstring);
          
                  
                });
          
          
                con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='changelog'", function (err, result, fields) {
                    if (err)  client.channels.cache.get('772909666601533450').send(err);
                    if (err) throw err;
                  hodnotaChangelogstring = JSON.stringify(result[0].hodnota);
                  hodnotaChangelog =  Number(hodnotaChangelogstring);
                  
                });
          
          
                con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='memez'", function (err, result, fields) {
                    if (err)  client.channels.cache.get('772909666601533450').send(err);
                    if (err) throw err;
                  hodnotaMemezstring = JSON.stringify(result[0].hodnota);
                  hodnotaMemez =  Number(hodnotaMemezstring);
                  
                });
          
          
                con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='helpdesk'", function (err, result, fields) {
                    if (err)  client.channels.cache.get('772909666601533450').send(err);
                    if (err) throw err;
                  hodnotaHelpdeskstring = JSON.stringify(result[0].hodnota);
                  hodnotaHelpdesk =  Number(hodnotaHelpdeskstring);   
                  
                });
          
          
                con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='event'", function (err, result, fields) {
                    if (err)  client.channels.cache.get('772909666601533450').send(err);
                    if (err) throw err;
          
                  hodnotaEventstring = JSON.stringify(result[0].hodnota);
                  hodnotaEvent =  Number(hodnotaEventstring);
                  
                });
                
                   con.end();
          
             
              
          
          
                
          
            })
          
          
            setTimeout(function () {
             var Pokec = '\n'+'**' + hodnotaPokec   + '**' +  ' - poslaných zpráv v roomce <#333659627352883201>';
             var Bot = '\n'+'**' + hodnotaBot   + '**' +  ' - poslaných zpráv v roomce <#364732638369415169>';
             var Changelog = '\n'+'**' + hodnotaChangelog   + '**' +  ' - poslaných zpráv v roomce <#544068287030362145>';
             var Memez = '\n'+'**' + hodnotaMemez   + '**' +  ' - poslaných zpráv v roomce <#615422457418874883>';
             var Helpdesk = '\n'+'**' + hodnotaHelpdesk   + '**' +  ' - poslaných zpráv v roomce <#770656028773056592>';
             var Event = '\n'+'**' + hodnotaEvent   + '**' +  '     - poslaných zpráv v roomce <#770656028773056592>';
             var OnlineEmbed = '\n'+'**' + online + '/' + celkem   + '**' +  '     - online uživatelů\n';
          
          
             var cissoucet = hodnotaPokec+hodnotaBot+hodnotaChangelog+hodnotaEvent+hodnotaHelpdesk+hodnotaMemez;
          
          
             var Soucet = '\n\n' +'**' + cissoucet +  '  zpráv celkově' + '**' ;
             var today = new Date();
             var datum = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
             var cas = today.getHours() + ":" + today.getMinutes();
             var vysledek = cas+' '+datum;
             var statsembed = new MessageEmbed()
             .setTitle('Statistiky:')
             .setColor(14483456)
             .setDescription(Pokec+Bot+Changelog+Memez+Helpdesk+Event+OnlineEmbed)
             .setFooter('Obnoveno: '+vysledek+' (Obnovováno každých 10 minut)');
             
             client.channels.cache.get('772909666601533450').send(statsembed);
              
               
          
           }, 5000);
          
        
        
        
        
        
        }
        
        
        
        })
        
   
    client.login('NzcxNjY0OTQ5NDQ5MDY0NDQ5.X5va_A.HaCNx77HzNAZ27nDy93CGnkRqQ8');
