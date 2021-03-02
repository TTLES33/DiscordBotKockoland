const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js') 
const mysql = require('mysql');

var blacklist;
var blacklist_exc;



var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


client.on('ready', () => {

//   1st load *******************************************************************************************************************

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




  console.log("[" + time +"] [AV] Loading databse " + database + " from " + host);

 con.connect(function(err) {
  if (err) throw err;

   con.query("SELECT `blacklist` FROM `anti_vulgarita`", function (err, result, fields) {
    if (err) throw err;
   blacklist = result;


       console.log("[" + time +"] [AV] Loaded database " + database);
      
    });

    con.query("SELECT `blacklist_exc` FROM `anti_vulgarita_exc`", function (err, result, fields) {
      if (err) throw err;
     blacklist_exc = result;
  
  
        console.log("[" + time +"] [AV] Loaded database " + database);
        con.end();
      });

    

  })



//**************************************************************************************************************************************







  console.log("[" + time +"] [FM] LOADED FILE - script_anti_vulgarita.js ");

  console.log("[" + time +"] [AV] Connecting");







console.log("[" + time +"] [AV] Connected");


setInterval(function(){ 
  
  

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




  console.log("[" + time +"] [AV] Loading databse " + database + " from " + host);

 con.connect(function(err) {
  if (err) throw err;

   con.query("SELECT `blacklist` FROM `anti_vulgarita`", function (err, result, fields) {
    if (err) throw err;
   blacklist = result;


      console.log("[" + time +"] [AV] Loaded database " + database);
     
    });

    con.query("SELECT `blacklist_exc` FROM `anti_vulgarita_exc`", function (err, result, fields) {
      if (err) throw err;
     blacklist_exc = result;
  
  
        console.log("[" + time +"] [AV] Loaded database " + database);
      

  })
  con.end();
});
}, 60 * 1000);




});

client.on('message', message => {

  if(message.member.roles.cache.get("333666817346371586") === false){
    if(message.channel !== "364732638369415169"){  

  var zprava = message.content;

  var blacklist_status = "0";
  var blacklist_exc_status = "0";
  var slovo;


  


for (var i = 0; i < blacklist.length; i++) {
    if(zprava.includes(blacklist[i].blacklist) === true) {
      

      blacklist_status = "1";
      slovo = blacklist[i].blacklist;

      
    }
  }


  for (var i = 0; i < blacklist_exc.length; i++) {
    if(zprava.includes(blacklist_exc[i].blacklist_exc) === true) {
      

      blacklist_exc_status = "1";
      
    }
  }


  if(blacklist_status === "1"){
    if(blacklist_exc_status === "0"){

    message.delete();
      var original_message = message.content;
      var nick = message.author;
      var blacklisted_word = slovo;

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
  
    var sql = "INSERT INTO anti_vulgarita_log (nick, blacklisted_word, original_message) VALUES ('" + nick + "', '" + blacklisted_word + "', '" + original_message + "')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      con.end();
    });
    console.log("[" + time +"] [AV] Blocked " + nick + " for " + blacklisted_word);
    
  });
  


    }


 }
}}

});


client.on('message', message => {



if(message.content.startsWith("--av add")){ 
console.log("--av add");

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
var insert1 = message.content;
var blacklist_insert = insert1.replace("--av add ", "");

con.connect(function(err) {
  if (err) throw err;

  var sql = "INSERT INTO anti_vulgarita (blacklist) VALUES ('" + blacklist_insert + "')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("[" + time +"] [AV] Added " + blacklist_insert + " into " + database);
    
    var embed = new MessageEmbed()
            .setTitle("Přidáno " + blacklist_insert + " do zakázaných slov")
            .setDescription("Změna se může projevit až za 1 min.");
    message.channel.send(embed);
  });

});

}


else if(message.content.startsWith("--av exc add")){ 
  console.log("--av exc add");
  
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
  var insert1 = message.content;
  var blacklist_insert = insert1.replace("--av exc add ", "");
  
  con.connect(function(err) {
    if (err) throw err;
  
    var sql = "INSERT INTO anti_vulgarita_exc (blacklist_exc) VALUES ('" + blacklist_insert + "')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("[" + time +"] [AV] Added " + blacklist_insert + " into " + database);
      
      var embed = new MessageEmbed()
              .setTitle("Přidáno " + blacklist_insert + " do vyjímek")
              .setDescription("Změna se může projevit až za 1 min.");
      message.channel.send(embed);
    });
  
  });
  
  }

  else if(message.content.startsWith("--av delete")){ 
    console.log("--av delete");
    
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
    var delete1 = message.content;
    var blacklist_delete = delete1.replace("--av delete ", "");
    
    con.connect(function(err) {
      if (err) throw err;
      var sql = "DELETE FROM anti_vulgarita WHERE blacklist = '" + blacklist_delete + "'";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("[" + time +"] [AV] Deleted " + blacklist_delete + " from " + database);

        var embed = new MessageEmbed()
        .setTitle("Odebráno " + blacklist_delete + " ze zakázaných slov")
        .setDescription("Změna se může projevit až za 1 min.");
        message.channel.send(embed);


      });
    });
    
    
    
    }



    else if(message.content.startsWith("--av exc delete")){ 
      console.log("--av exc delete");
      
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
      var delete1 = message.content;
      var blacklist_delete = delete1.replace("--av exc delete ", "");
      
      con.connect(function(err) {
        if (err) throw err;
        var sql = "DELETE FROM anti_vulgarita_exc WHERE blacklist_exc = '" + blacklist_delete + "'";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("[" + time +"] [AV] Deleted " + blacklist_delete + " from " + database);
  
          var embed = new MessageEmbed()
          .setTitle("Odebráno " + blacklist_delete + " z vyjímek")
          .setDescription("Změna se může projevit až za 1 min.");
          message.channel.send(embed);
  
  
        });
      });
      
      
      
      }

      else if(message.content === "--av"){
        var embed1 = new MessageEmbed()
        .setDescription("[WebAdmin](http://ttles.space/kockoland/)");
        message.channel.send(embed1);
        var embed2 = new MessageEmbed()
        .setTitle("Anti Vulgarita")
        .setDescription("`--av` Zobrazí tuto nápovědu \n `--av list` List blokovaných slov a vyjímek \n `--av add <slovo>` Přidá slovo do blacklistu \n `--av delete <slovo>` Odebere slovo z blacklistu \n `--av exc add <slovo>` Přidá slovo do vyjímek \n `--av exc delete <slovo>` Odebere slovo z vyjímek");
        message.channel.send(embed2);

      }

      
      else if(message.content === "--av list"){
        var embed1 = new MessageEmbed()
        .setDescription("Kompletní list je k dipozici zde: [WebAdmin](http://ttles.space/kockoland/)");
        message.channel.send(embed1);


      }



})


client.login('NzcxNjY0OTQ5NDQ5MDY0NDQ5.X5va_A.HaCNx77HzNAZ27nDy93CGnkRqQ8');