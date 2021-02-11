
const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
var os = require('os');   


var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

client.on('ready', () => {
   // console.log(os.arch());
   //console.log(os.cpus());
   // console.log(os.freemem());
   // console.log(os.homedir());
    //console.log(os.hostname());
    //console.log(os.networkInterfaces());
    //console.log(os.platform());
    //console.log(os.tmpdir());
   // console.log(os.totalmem());
    //console.log(os.type());

console.log("[" + time +"] [FM] Loaded Scrpit script_os.js");



})

var network = JSON.stringify(os.networkInterfaces());
var cpu = JSON.stringify(os.cpus());

client.on('message', message => {


    if(message.content === "--server"){ 

var first = new MessageEmbed()
              .setTitle('Server Info:')
              .setDescription("FreeMem / Total:     " + os.freemem() + " / " + os.totalmem() + "\n Home Dir: " + os.homedir() + "\n Temp Dir: " + os.tmpdir() + "\n System: " + os.type() + " - " + os.platform() + " ( " + os.arch() + " ) \n ");

var second = new MessageEmbed()
              .setTitle('Network Info:')
              .setDescription(network + "\n\n" + os.hostname()) ;         
              


 var sethirdcond = new MessageEmbed()
              .setTitle('CPU Info:')
              .setDescription(cpu);
                         
              message.channel.send(first);
              message.channel.send(second);
              message.channel.send(sethirdcond);

            }
        })



        client.login('NzcxNjY0OTQ5NDQ5MDY0NDQ5.X5va_A.HaCNx77HzNAZ27nDy93CGnkRqQ8');






