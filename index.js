const Discord = require('discord.js');
var mysql = require('mysql');




const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');


client.on('ready', () => {


})



var status = '0';
var content = '';

client.on('message', message => {

  
/*    if(message.content === 'warn'){
    console.log(status);
          message.channel.send('Content');
          status = '1';
          console.log(status);
        }  
        else if(status === '1'){
          if message.author
          console.log(status);
           content = message.content;
           status = '2';
           console.log(status);
        }
        else if(status === '2'){
          console.log(status);
    
    message.channel.send(content);
    
        } */
    




if(message.channel.id !== '364732638369415169'){
    if(message.content.startsWith('=play'/*  || '=queue' || '=skip' || '=purge' */)) {
        var autor = message.autor;
    var text = ',příkazy k botům piš do roomky bot-commands';
    var text2 = 'Příkazy k botovi <@185476724627210241> piš do roomky <#364732638369415169>';
    var groovyembed  = new MessageEmbed()
    .setTitle(autor+text)
    .setDescription(text2)
    .setColor(14483456);
    message.channel.send(groovyembed);
    }}




         
         
         
         

         
         
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
                           console.log('UPDATE Statistiky=' + hodnota + ' - Pokec');
             
             
             
             
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




client.on('ready', () => {

  console.log('Bot je online!');
  
  client.channels.cache.get('762739633402413067').send('Bot je online!');
  client.user.setActivity("Adminy", { type: "LISTENING"})
  client.channels.cache.get('762739633402413067').send('[LOG] SetActivity: Listening Adminy');


  const guild = client.guilds.cache.get("333659627352883201");






  




  var interval = setInterval (function () {

    var celkem = guild.memberCount;
    var online = guild.members.cache.filter(member => member.presence.status !== "offline").size;


    const admin = guild.members.cache.filter(m =>

      m.roles.cache.has('333666754943516674') &&
  
      m.presence.status === 'online'
    ).size
  
    const grafik = guild.members.cache.filter(m =>
  
      m.roles.cache.has('735203698560467061') &&
  
      m.presence.status === 'online'
    ).size
  
    const stavitel = guild.members.cache.filter(m =>
  
      m.roles.cache.has('735220759923785768') &&
  
      m.presence.status === 'online'
    ).size
  
    const helper = guild.members.cache.filter(m =>
  
      m.roles.cache.has('333666886451724299') &&
  
      m.presence.status === 'online'
    ).size
  
    const moderator = guild.members.cache.filter(m =>
  
      m.roles.cache.has('333666817346371586') &&
  
      m.presence.status === 'online'
    ).size
  
  
  
  
  
  
  
    var staffonline = admin+grafik+stavitel+helper+moderator;
  
  
  
  
  
  
  
    const admin_celkem = guild.members.cache.filter(m =>
  
      m.roles.cache.has('333666754943516674') 
  
  
    ).size
  
    const grafik_celkem = guild.members.cache.filter(m =>
  
      m.roles.cache.has('735203698560467061') 
  
    ).size
  
    const stavitel_celekm = guild.members.cache.filter(m =>
  
      m.roles.cache.has('735220759923785768') 
  
    ).size
  
    const helper_celkem = guild.members.cache.filter(m =>
  
      m.roles.cache.has('333666886451724299') 
  
    ).size
  
    const moderator_celkem = guild.members.cache.filter(m =>
  
      m.roles.cache.has('333666817346371586') 
  
  
    ).size
  
  
  
  
  
     var staff_celkem = admin_celkem+grafik_celkem+stavitel_celekm+helper_celkem+moderator_celkem;
  
  
    console.log('management online : ' + staffonline + '/' + staff_celkem);
    





 
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


                
                  var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+online+" WHERE name='online'";
                  con.query(sql, function (err, result) {
                  if (err)  client.channels.cache.get('772909666601533450').send(err);
                  console.log('online hodnota= ' + online);
               
                  });

                  var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+celkem+" WHERE name='celkem'";
                  con.query(sql, function (err, result) {
                  if (err)  client.channels.cache.get('772909666601533450').send(err);
                  console.log('celkem hodnota= '+ celkem);
          
                  });




                  var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+staffonline+" WHERE name='staff_online'";
                  con.query(sql, function (err, result) {
                  if (err)  client.channels.cache.get('772909666601533450').send(err);
                  console.log('online hodnota staff= ' + staffonline);
               
                  });

                  var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+staff_celkem+" WHERE name='staff_celkem'";
                  con.query(sql, function (err, result) {
                  if (err)  client.channels.cache.get('772909666601533450').send(err);
                  console.log('celkem hodnota staff= '+ staff_celkem);
          
                  });
          









                    
 
  






       
                  con.end();
   
            
             

    
               
   
           })
       
   
           setTimeout(function () {
            var Pokec = '\n'+'**' + hodnotaPokec   + '**' +  ' - poslaných zpráv v roomce <#333659627352883201>';
            var Bot = '\n'+'**' + hodnotaBot   + '**' +  ' - poslaných zpráv v roomce <#364732638369415169>';
            var Changelog = '\n'+'**' + hodnotaChangelog   + '**' +  ' - poslaných zpráv v roomce <#544068287030362145>';
            var Memez = '\n'+'**' + hodnotaMemez   + '**' +  ' - poslaných zpráv v roomce <#615422457418874883>';
            var Helpdesk = '\n'+'**' + hodnotaHelpdesk   + '**' +  ' - poslaných zpráv v roomce <#770656028773056592>';
            var Event = '\n'+'**' + hodnotaEvent   + '**' +  '     - pravidel v <#776750895844163594>';
            var OnlineEmbed = '\n'+'**' + online + '/' + celkem   + '**' +  '     - online uživatelů\n';


            var cissoucet = hodnotaPokec+hodnotaBot+hodnotaChangelog+hodnotaEvent+hodnotaHelpdesk+hodnotaMemez;


            var Soucet = '\n\n' +'**' + cissoucet +  '  zpráv celkově' + '**' ;
            var today = new Date();
            var datum = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
            var cas = today.getHours() + ":" + today.getMinutes();
            var vysledek = cas+' '+datum;
            var statsembed = new MessageEmbed()
            .setTitle('Statistikyyy:')
            .setColor(14483456)
            .setDescription(Pokec+Bot+Changelog+Memez+Helpdesk+Event+OnlineEmbed)
            .setFooter('Obnoveno: '+vysledek+' (Obnovováno každých 10 minut)');
            
            client.channels.cache.get('772909666601533450').send(statsembed);
             
              

          }, 5000);
   
   
   
          }, 60 * 1000); 




});







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
