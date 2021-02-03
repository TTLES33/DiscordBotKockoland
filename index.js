const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');



//Scripts
script_stats = require("./script_stats");
script_reklama = require("./script_reklama");
script_commands = require("./script_commands");
script_catch = require("./script_catch");
script_get_members = require("./script_get_members");
script_embed = require("./script_embed");
scritp_help = require("./script_help");
script_os = require("./script_os");





client.on('ready', () => {


  console.log("[File Manager] LOADED FILE - index.js ");
  console.log("[Main Log] Bot je online!")
  client.channels.cache.get('762739633402413067').send('Bot je online!');
  client.user.setActivity("Adminy", { type: "LISTENING"})
  client.channels.cache.get('762739633402413067').send('[LOG] SetActivity: Listening Adminy');
  console.log("[Main Log] SetActivity =  Adminy");





});







client.login('NzcxNjY0OTQ5NDQ5MDY0NDQ5.X5va_A.HaCNx77HzNAZ27nDy93CGnkRqQ8');
