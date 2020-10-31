const Discord = require('discord.js');



const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');


client.once('ready', () => {
    console.log('Bot je online!');
    client.user.setActivity("Adminy", { type: "LISTENING"})
    



        console.log('Začátek obnovování Heroku Serveru');
       var interval = setInterval (function () {
   
           var today = new Date();
           var datum = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
           var cas = today.getHours() + ":" + today.getMinutes();
           var vysledek = cas+' '+datum;
           var obnoveno1 = 'obnoveno:';
           var obnoveno2 = 'Obnoveno Heroku - ';
   
   

           console.log(obnoveno2+vysledek)
       }, 360 * 1000); 
   

});


var warnStatus = '0';



client.on('message', message => {

  

if(message.content === '/uvitacizprava'){
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


}




else if(message.channel.id !== '364732638369415169'){
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




 






})


client.login('NzcxNjY0OTQ5NDQ5MDY0NDQ5.X5va_A.xuvVS5GAQNei_vTgVYp4YlP1HDM');
