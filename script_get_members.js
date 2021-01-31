const Discord = require('discord.js');
const client = new Discord.Client();
var mysql = require('mysql');
const { Client, MessageEmbed } = require('discord.js');

client.on('ready', () => {

    console.log("[File Manager] LOADED FILE - script_get_members.js ");
  
  
  })    


client.on('ready', () => {


  var interval = setInterval (function () {
    
    const guild = client.guilds.cache.get("333659627352883201");
    celkem = guild.memberCount;
    online = guild.members.cache.filter(member => member.presence.status !== "offline").size;


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
 
 
   console.log('[User Count] Online managerů: ' + staffonline + '/' + staff_celkem);
   






     var con = mysql.createConnection({
          host: "freedb.tech",
          user: "freedbtech_TTLES",
          password: "testpass",
          database: "freedbtech_STATS"
        });
             


  
            con.connect(function(err) {
                if (err) throw err;
              if (err)  client.channels.cache.get('772909666601533450').send(err);
              
  
 


               
                 var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+online+" WHERE name='online'";
                 con.query(sql, function (err, result) {
                 if (err)  client.channels.cache.get('772909666601533450').send(err);
                 console.log('[User Count] Celkem online uživatelů: ' + online);
              
                 });

                 var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+celkem+" WHERE name='celkem'";
                 con.query(sql, function (err, result) {
                 if (err)  client.channels.cache.get('772909666601533450').send(err);
                 console.log('[User Count] Celkem uživatelů: '+ celkem);
         
                 });




                 var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+staffonline+" WHERE name='staff_online'";
                 con.query(sql, function (err, result) {
                 if (err)  client.channels.cache.get('772909666601533450').send(err);
                 console.log('[User Count] Celkem managerů: ' + staffonline);
              
                 });

                 var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+staff_celkem+" WHERE name='staff_celkem'";
                 con.query(sql, function (err, result) {
                 if (err)  client.channels.cache.get('772909666601533450').send(err);
                 console.log('[User Count] Celkem online managerů:'+ staff_celkem);
         
                 });
         









                   

 






      
                 con.end();
  
           
            

   
              
  
          })
      

  
  
  
         }, 60 * 1000); 


        });

             
    client.login('NzcxNjY0OTQ5NDQ5MDY0NDQ5.X5va_A.HaCNx77HzNAZ27nDy93CGnkRqQ8');