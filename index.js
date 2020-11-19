







const Discord = require('discord.js');
var mysql = require('mysql');



const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');


client.once('ready', () => {
    console.log('Bot je online!');
    client.channels.cache.get('772909666601533450').send('Bot je online!');
    client.user.setActivity("Adminy", { type: "LISTENING"})
    




    var interval = setInterval (function () {
   
        var con = mysql.createConnection({
             host: "freedb.tech",
             user: "freedbtech_TTLES",
             password: "testpass",
             database: "freedbtech_STATS"
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
     
     
              
               
                 setTimeout(function () {
                   var Pokec = '\n'+'**' + hodnotaPokec   + '**' +  ' - poslaných zpráv v roomce <#333659627352883201>'
                   var Bot = '\n'+'**' + hodnotaBot   + '**' +  ' - poslaných zpráv v roomce <#364732638369415169>'
                   var Changelog = '\n'+'**' + hodnotaChangelog   + '**' +  ' - poslaných zpráv v roomce <#544068287030362145>'
                   var Memez = '\n'+'**' + hodnotaMemez   + '**' +  ' - poslaných zpráv v roomce <#615422457418874883>'
                   var Helpdesk = '\n'+'**' + hodnotaHelpdesk   + '**' +  ' - poslaných zpráv v roomce <#770656028773056592>'
                   var Event = '\n'+'**' + hodnotaEvent   + '**' +  '     - pravidel v <#776750895844163594>\n'
      
     
                   var cissoucet = hodnotaPokec+hodnotaBot+hodnotaChangelog+hodnotaEvent+hodnotaHelpdesk+hodnotaMemez;
     
     
                   var Soucet = '\n\n' +'**' + cissoucet +  '  zpráv celkově' + '**' ;
                   var today = new Date();
                   var datum = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
                   var cas = today.getHours() + ":" + today.getMinutes();
                   var vysledek = cas+' '+datum;
                   var statsembed = new MessageEmbed()
                   .setTitle('Statistiky:')
                   .setColor(14483456)
                   .setDescription(Pokec+Bot+Changelog+Memez+Helpdesk+Event)
                   .setFooter('Obnoveno: '+vysledek+' (Obnovováno každých 10 minut)');
                   
                   client.channels.cache.get('772909666601533450').send(statsembed);
                     
     
                 }, 5000);
      
                 con.end();
     
             })
         
     
     
     
     
     
            }, 5 * 1000); 

});


client.on ("guildMemberAdd", member => {


    console.log('N2kdo se pripojil!!!');


})





var warnStatus = '0';

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



    message.channel.send(welocmeEmbed);
    message.channel.send(welocmeEmbed2);


})



client.on('message', message => {

  





if(message.channel.id !== '364732638369415169'){
    if(message.content.startsWith('=play' || '=queue' || '=skip' || '=purge')) {
        var autor = message.autor;
    var text = ',příkay k botům piš do roomky bot-commands';
    var text2 = 'Příkay k botovi <@185476724627210241> piš do roomky <#364732638369415169>';
    var groovyembed  = new MessageEmbed()
    .setTitle(autor+text)
    .setDescription(text2)
    .setColor(14483456);
    message.channel.send(groovyembed);
    }}



else if(message.content === '/warn'){
    

    var warn_1embed = new MessageEmbed()

            .setDescription('Pro zrušení spaní upozornění napiš /c')
            .setTitle('Napište název upozornění')
            .setColor(49919);

message.channel.send(warn_1embed);
warnStatus = '1';

}

else if (warnStatus === '1'){


 
    var warn_2embed = new MessageEmbed()
 
    .setDescription('Pro zrušení paní upozornění napiš /c')
    .setTitle('Napiště zprávu upozornění')
    .setColor(49919);
 
 message.channel.send(warn_2embed);
 var warnStatus = '2';
 
 
 }

 else if (warnStatus === '2'){

    var warnContent = message.content;
 
    var warn_3embed = new MessageEmbed()
 
    .setDescription('test')
    .setTitle(warnStatus)
    .setColor(49919);
 
 message.channel.send(warn_3embed);
 //var warnStatus = '2';
 
 
 }
 else if(message.content === 'test'){
message.channel.send(warnStatus);


 }
        
           
         
         
         
         

         
         
                //-----------------------------------------------------------------------------------------------
                 //-------------------------------------- message Pokec-------------------------------------------
                 //----------------------------------------------------------------------------------------------
                 
                 else if(message.channel.id === '333659627352883201'){
         
         
            var con = mysql.createConnection({
                 host: "freedb.tech",
                 user: "freedbtech_TTLES",
                 password: "testpass",
                 database: "freedbtech_STATS"
               });
                       
                       con.connect(function(err) {
                         var hodnota;
                         if (err)  client.channels.cache.get('772909666601533450').send(err);
             
             
                         con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='pokec'", function (err, result, fields) {
                             if (err)  client.channels.cache.get('772909666601533450').send(err);
             
             
                           hodnotaJSON = JSON.stringify(result[0].hodnota);
                           hodnota = ++hodnotaJSON;
                           console.log('UPDATE Statistiky=' + hodnota + ' - Pravidla');
             
             
             
             
                         });
                         setTimeout(function () {
                             console.log(hodnota);
                             var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+hodnota+" WHERE name='pokec'";
                             con.query(sql, function (err, result) {
                                 if (err)  client.channels.cache.get('772909666601533450').send(err);
                                 console.log(result.affectedRows + " record(s) updated");
                                 con.end();
                             });
             
                         }, 2000);
                  
                       });
         
                 }
         
         
         
                 
                //-----------------------------------------------------------------------------------------------
                 //-------------------------------------- message bot-------------------------------------------
                 //----------------------------------------------------------------------------------------------
                 
                 else if(message.channel.id === '364732638369415169'){
         
         
            var con = mysql.createConnection({
                 host: "freedb.tech",
                 user: "freedbtech_TTLES",
                 password: "testpass",
                 database: "freedbtech_STATS"
               });
                       
                       con.connect(function(err) {
                         var hodnota;
                         if (err)  client.channels.cache.get('772909666601533450').send(err);
             
             
                         con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='bot'", function (err, result, fields) {
                             if (err)  client.channels.cache.get('772909666601533450').send(err);
             
             
                           hodnotaJSON = JSON.stringify(result[0].hodnota);
                           hodnota = ++hodnotaJSON;
                           
                           client.channels.cache.get('772909666601533450').send('UPDATE Statistiky=' + hodnota + ' - Bot');
             
             
             
             
                         });
                         setTimeout(function () {
                             console.log(hodnota);
                             var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+hodnota+" WHERE name='bot'";
                             con.query(sql, function (err, result) {
                                 if (err)  client.channels.cache.get('772909666601533450').send(err);
                                 console.log(result.affectedRows + " record(s) updated");
                                 con.end();
                             });
             
                         }, 2000);
                  
                       });
         
                 }
         
         
         
                 
                //-----------------------------------------------------------------------------------------------
                 //-------------------------------------- message changelog-------------------------------------------
                 //----------------------------------------------------------------------------------------------
                 
                 else if(message.channel.id === '544068287030362145'){
         
         
         
            var con = mysql.createConnection({
                 host: "freedb.tech",
                 user: "freedbtech_TTLES",
                 password: "testpass",
                 database: "freedbtech_STATS"
               });
                       con.connect(function(err) {
                         var hodnota;
                         if (err)  client.channels.cache.get('772909666601533450').send(err);
             
             
                         con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='changelog'", function (err, result, fields) {
                             if (err)  client.channels.cache.get('772909666601533450').send(err);
             
             
                           hodnotaJSON = JSON.stringify(result[0].hodnota);
                           hodnota = ++hodnotaJSON;
                           client.channels.cache.get('772909666601533450').send('UPDATE Statistiky=' + hodnota + ' - Changelog');
             
             
             
             
                         });
                         setTimeout(function () {
                             console.log(hodnota);
                             var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+hodnota+" WHERE name='changelog'";
                             con.query(sql, function (err, result) {
                                 if (err)  client.channels.cache.get('772909666601533450').send(err);
                                 console.log(result.affectedRows + " record(s) updated");
                                 con.end();
                             });
             
                         }, 2000);
                  
                       });
         
                 }
                                  
                //-----------------------------------------------------------------------------------------------
                 //-------------------------------------- message memez-------------------------------------------
                 //----------------------------------------------------------------------------------------------
                 
                 else if(message.channel.id === '615422457418874883'){
         
         
         
                    var con = mysql.createConnection({
                         host: "freedb.tech",
                         user: "freedbtech_TTLES",
                         password: "testpass",
                         database: "freedbtech_STATS"
                       });
                               con.connect(function(err) {
                                 var hodnota;
                                 if (err)  client.channels.cache.get('772909666601533450').send(err);
                     
                     
                                 con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='memez'", function (err, result, fields) {
                                     if (err)  client.channels.cache.get('772909666601533450').send(err);
                     
                     
                                   hodnotaJSON = JSON.stringify(result[0].hodnota);
                                   hodnota = ++hodnotaJSON;
                                   client.channels.cache.get('772909666601533450').send('UPDATE Statistiky=' + hodnota + ' - Memez');
                     
                     
                     
                     
                                 });
                                 setTimeout(function () {
                                     console.log(hodnota);
                                     var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+hodnota+" WHERE name='memez'";
                                     con.query(sql, function (err, result) {
                                         if (err)  client.channels.cache.get('772909666601533450').send(err);
                                         console.log(result.affectedRows + " record(s) updated");
                                         con.end();
                                     });
                     
                                 }, 2000);
                          
                               });
                 
                         }
                                          
                //-----------------------------------------------------------------------------------------------
                 //-------------------------------------- message helpdesk-------------------------------------------
                 //----------------------------------------------------------------------------------------------
                 
                 else if(message.channel.id === '615422558648401953'){
         
         
         
                    var con = mysql.createConnection({
                         host: "freedb.tech",
                         user: "freedbtech_TTLES",
                         password: "testpass",
                         database: "freedbtech_STATS"
                       });
                               con.connect(function(err) {
                                 var hodnota;
                                 if (err)  client.channels.cache.get('772909666601533450').send(err);
                     
                     
                                 con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='helpdesk'", function (err, result, fields) {
                                     if (err)  client.channels.cache.get('772909666601533450').send(err);
                     
                     
                                   hodnotaJSON = JSON.stringify(result[0].hodnota);
                                   hodnota = ++hodnotaJSON;
                                   client.channels.cache.get('772909666601533450').send('UPDATE Statistiky=' + hodnota + ' - Helpdesk');
                     
                     
                     
                     
                                 });
                                 setTimeout(function () {
                                     console.log(hodnota);
                                     var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+hodnota+" WHERE name='helpdesk'";
                                     con.query(sql, function (err, result) {
                                         if (err)  client.channels.cache.get('772909666601533450').send(err);
                                         console.log(result.affectedRows + " record(s) updated");
                                         con.end();
                                     });
                     
                                 }, 2000);
                          
                               });
                 
                         }
                                          
                //-----------------------------------------------------------------------------------------------
                 //-------------------------------------- message changelog-------------------------------------------
                 //----------------------------------------------------------------------------------------------
                 
                 else if(message.channel.id === '544068287030362145'){
         
         
         
                    var con = mysql.createConnection({
                         host: "freedb.tech",
                         user: "freedbtech_TTLES",
                         password: "testpass",
                         database: "freedbtech_STATS"
                       });
                               con.connect(function(err) {
                                 var hodnota;
                                 if (err)  client.channels.cache.get('772909666601533450').send(err);
                     
                     
                                 con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='changelog'", function (err, result, fields) {
                                     if (err)  client.channels.cache.get('772909666601533450').send(err);
                     
                     
                                   hodnotaJSON = JSON.stringify(result[0].hodnota);
                                   hodnota = ++hodnotaJSON;
                                   client.channels.cache.get('772909666601533450').send('UPDATE Statistiky=' + hodnota + ' - Changelog');
                     
                     
                     
                     
                                 });
                                 setTimeout(function () {
                                     console.log(hodnota);
                                     var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+hodnota+" WHERE name='changelog'";
                                     con.query(sql, function (err, result) {
                                         if (err)  client.channels.cache.get('772909666601533450').send(err);
                                         console.log(result.affectedRows + " record(s) updated");
                                         con.end();
                                     });
                     
                                 }, 2000);
                          
                               });
                 
                         }


                  //-----------------------------------------------------------------------------------------------
                 //-------------------------------------- message event-------------------------------------------
                 //----------------------------------------------------------------------------------------------
                 
                 else if(message.channel.id === '770656028773056592'){
         
         
         
                    var con = mysql.createConnection({
                         host: "freedb.tech",
                         user: "freedbtech_TTLES",
                         password: "testpass",
                         database: "freedbtech_STATS"
                       });
                               con.connect(function(err) {
                                 var hodnota;
                                 if (err)  client.channels.cache.get('772909666601533450').send(err);
                     
                     
                                 con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='event'", function (err, result, fields) {
                                     if (err)  client.channels.cache.get('772909666601533450').send(err);
                     
                     
                                   hodnotaJSON = JSON.stringify(result[0].hodnota);
                                   hodnota = ++hodnotaJSON;
                                   client.channels.cache.get('772909666601533450').send('UPDATE Statistiky=' + hodnota + ' - Event');
                     
                     
                     
                     
                                 });
                                 setTimeout(function () {
                                     console.log(hodnota);
                                     var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+hodnota+" WHERE name='event'";
                                     con.query(sql, function (err, result) {
                                         if (err)  client.channels.cache.get('772909666601533450').send(err);
                                         console.log(result.affectedRows + " record(s) updated");
                                         con.end();
                                     });
                     
                                 }, 2000);
                          
                               });
                 
                         }
         




 

        




})


client.login('NzcxNjY0OTQ5NDQ5MDY0NDQ5.X5va_A.HaCNx77HzNAZ27nDy93CGnkRqQ8');
