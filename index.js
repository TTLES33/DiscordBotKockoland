const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');


var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

//Scripts
console.log("-------------------------");
console.log("[FM] File Manager");
console.log("[ML] Main Log");
console.log("[AV] Anti Vulgarita");
console.log("[UC] User Count");
console.log("-------------------------");
script_stats = require("./script_stats");
script_reklama = require("./script_reklama");
script_commands = require("./script_commands");
script_catch = require("./script_catch");
script_get_members = require("./script_get_members");
script_embed = require("./script_embed");
scritp_help = require("./script_help");
script_os = require("./script_os");
script_anti_vulgarita = require("./script_anti_vulgarita");




client.on('ready', () => {


  console.log("[" + time +"] [FM] LOADED FILE - index.js ");
  console.log("[" + time +"] [ML] Bot je online!")
  client.channels.cache.get('762739633402413067').send('Bot je online!');
  client.user.setActivity("Adminy", { type: "LISTENING"})
  client.channels.cache.get('762739633402413067').send('[LOG] SetActivity: Listening Adminy');
  console.log("[" + time +"] [ML] SetActivity =  Adminy");





});






client.login('NzcxNjY0OTQ5NDQ5MDY0NDQ5.X5va_A.HaCNx77HzNAZ27nDy93CGnkRqQ8');
