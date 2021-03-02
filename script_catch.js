const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
var mysql = require('mysql');


var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
client.on('ready', () => {

    console.log("[" + time +"] [FM] LOADED FILE - script_catch.js ");
  
  
  })    


client.on('message', message => {

  
         

         
         
    //-----------------------------------------------------------------------------------------------
     //-------------------------------------- message Pokec-------------------------------------------
     //----------------------------------------------------------------------------------------------
     
      if(message.channel.id === '333659627352883201'){


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
             var hodnota;
             if (err)  client.channels.cache.get('772909666601533450').send(err);
 
 
             con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='pokec'", function (err, result, fields) {
                 if (err)  client.channels.cache.get('772909666601533450').send(err);
 
 
               hodnotaJSON = JSON.stringify(result[0].hodnota);
               hodnota = ++hodnotaJSON;
               console.log('[" + time +"] [Stats] UPDATE Statistiky=' + hodnota + ' - Pokec');
 
 
 
 
             });
             setTimeout(function () {
            
                 var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+hodnota+" WHERE name='pokec'";
                 con.query(sql, function (err, result) {
                     if (err)  client.channels.cache.get('772909666601533450').send(err);
                     
                     con.end();
                 });
 
             }, 2000);
      
           });

     }



     
    //-----------------------------------------------------------------------------------------------
     //-------------------------------------- message bot-------------------------------------------
     //----------------------------------------------------------------------------------------------
     
     else if(message.channel.id === '364732638369415169'){


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
             var hodnota;
             if (err)  client.channels.cache.get('772909666601533450').send(err);
 
 
             con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='bot'", function (err, result, fields) {
                 if (err)  client.channels.cache.get('772909666601533450').send(err);
 
 
               hodnotaJSON = JSON.stringify(result[0].hodnota);
               hodnota = ++hodnotaJSON;
               
              
 
 
 
             });
             setTimeout(function () {
              
                 var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+hodnota+" WHERE name='bot'";
                 con.query(sql, function (err, result) {
                     if (err)  client.channels.cache.get('772909666601533450').send(err);
                    
                     con.end();
                 });
 
             }, 2000);
      
           });

     }



     
    //-----------------------------------------------------------------------------------------------
     //-------------------------------------- message changelog-------------------------------------------
     //----------------------------------------------------------------------------------------------
     
     else if(message.channel.id === '544068287030362145'){


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
             var hodnota;
             if (err)  client.channels.cache.get('772909666601533450').send(err);
 
 
             con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='changelog'", function (err, result, fields) {
                 if (err)  client.channels.cache.get('772909666601533450').send(err);
 
 
               hodnotaJSON = JSON.stringify(result[0].hodnota);
               hodnota = ++hodnotaJSON;
        
 
 
 
 
             });
             setTimeout(function () {
                
                 var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+hodnota+" WHERE name='changelog'";
                 con.query(sql, function (err, result) {
                     if (err)  client.channels.cache.get('772909666601533450').send(err);
               
                     con.end();
                 });
 
             }, 2000);
      
           });

     }
                      
    //-----------------------------------------------------------------------------------------------
     //-------------------------------------- message memez-------------------------------------------
     //----------------------------------------------------------------------------------------------
     
     else if(message.channel.id === '615422457418874883'){


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
                     var hodnota;
                     if (err)  client.channels.cache.get('772909666601533450').send(err);
         
         
                     con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='memez'", function (err, result, fields) {
                         if (err)  client.channels.cache.get('772909666601533450').send(err);
         
         
                       hodnotaJSON = JSON.stringify(result[0].hodnota);
                       hodnota = ++hodnotaJSON;
            
         
         
         
         
                     });
                     setTimeout(function () {
                        
                         var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+hodnota+" WHERE name='memez'";
                         con.query(sql, function (err, result) {
                             if (err)  client.channels.cache.get('772909666601533450').send(err);
                    
                             con.end();
                         });
         
                     }, 2000);
              
                   });
     
             }
                              
    //-----------------------------------------------------------------------------------------------
     //-------------------------------------- message helpdesk-------------------------------------------
     //----------------------------------------------------------------------------------------------
     
     else if(message.channel.id === '615422558648401953'){



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
                     var hodnota;
                     if (err)  client.channels.cache.get('772909666601533450').send(err);
         
         
                     con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='helpdesk'", function (err, result, fields) {
                         if (err)  client.channels.cache.get('772909666601533450').send(err);
         
         
                       hodnotaJSON = JSON.stringify(result[0].hodnota);
                       hodnota = ++hodnotaJSON;
        
         
         
         
         
                     });
                     setTimeout(function () {
           
                         var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+hodnota+" WHERE name='helpdesk'";
                         con.query(sql, function (err, result) {
                             if (err)  client.channels.cache.get('772909666601533450').send(err);
                             
                             con.end();
                         });
         
                     }, 2000);
              
                   });
     
             }
                              
    //-----------------------------------------------------------------------------------------------
     //-------------------------------------- message changelog-------------------------------------------
     //----------------------------------------------------------------------------------------------
     
     else if(message.channel.id === '544068287030362145'){



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
                     var hodnota;
                     if (err)  client.channels.cache.get('772909666601533450').send(err);
         
         
                     con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='changelog'", function (err, result, fields) {
                         if (err)  client.channels.cache.get('772909666601533450').send(err);
         
         
                       hodnotaJSON = JSON.stringify(result[0].hodnota);
                       hodnota = ++hodnotaJSON;
                     
         
         
         
         
                     });
                     setTimeout(function () {
                      
                         var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+hodnota+" WHERE name='changelog'";
                         con.query(sql, function (err, result) {
                             if (err)  client.channels.cache.get('772909666601533450').send(err);
                            
                             con.end();
                         });
         
                     }, 2000);
              
                   });
     
             }


      //-----------------------------------------------------------------------------------------------
     //-------------------------------------- message event-------------------------------------------
     //----------------------------------------------------------------------------------------------
     
     else if(message.channel.id === '770656028773056592'){


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
                     var hodnota;
                     if (err)  client.channels.cache.get('772909666601533450').send(err);
         
         
                     con.query("SELECT * FROM `KOCKOLAND_STATS` WHERE name='event'", function (err, result, fields) {
                         if (err)  client.channels.cache.get('772909666601533450').send(err);
         
         
                       hodnotaJSON = JSON.stringify(result[0].hodnota);
                       hodnota = ++hodnotaJSON;
                    
         
         
         
         
                     });
                     setTimeout(function () {
                    
                         var sql = "UPDATE `KOCKOLAND_STATS` SET hodnota="+hodnota+" WHERE name='event'";
                         con.query(sql, function (err, result) {
                             if (err)  client.channels.cache.get('772909666601533450').send(err);
                            
                             con.end();
                         });
         
                     }, 2000);
              
                   });
     
             }












})



    
client.login('NzcxNjY0OTQ5NDQ5MDY0NDQ5.X5va_A.HaCNx77HzNAZ27nDy93CGnkRqQ8');