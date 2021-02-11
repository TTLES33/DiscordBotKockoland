
const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');


var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();


client.on('ready', () => {

    console.log("[" + time +"] [FM] LOADED FILE - script_embed.js ");
  
  
  })    

var status = '0';
var content = '';
var nadpis = '';
var color = "";
var channel = "";
var autor_console = "";






client.on('message', message => {







    if(message.channel.id === "772909666601533450"){
    

    
       if(message.content === "--c"){
    
        status = "0";
        var embed  = new MessageEmbed()
        .setTitle("Vytváření Zrušeno")
    
        .setColor(14483456);
        message.channel.send(embed);
   
    } 
    
    else if(status === "0"){
     if(message.content === "--embed"){
       if(message.author.bot) return;
       author_console = message.author;
       var embed  = new MessageEmbed()
       .setTitle("Zadej nadpis")
       .setDescription("> pro zrušení zadávání napiš `--c`")
    
       .setColor(14596352);
       message.channel.send(embed);
         status = "1";
         console.log("[" + time +"] [" + time +"] [Embed]  Uživatal " + author_console + "začal vytvářek embed zprávu");
        console.log("[" + time +"] [" + time +"] [Embed]   Status = " + status);
    
    
    
         
    
    
    
    }}



    
    
    else if(status === "1"){
        if(message.author.bot) return;
          nadpis = message.content;
          var embed  = new MessageEmbed()
          .setTitle("Zadej obsah zprávy:")
          .setDescription("> pro zrušení zadávání napiš `--c`")
          .setColor(14596352);
          message.channel.send(embed);
    
          var vysledek  = new MessageEmbed()
          .setTitle(nadpis)
          .setColor(11053224);
          message.channel.send(vysledek);
          status = "2"

          console.log("[" + time +"] [" + time +"] [Embed]   Zadávání obsahu");
          console.log("[" + time +"] [" + time +"] [Embed]   Status = " + status);
    
    }
    
    else if(status === "2"){
      if(message.author.bot) return;
      content = message.content;
        var embed  = new MessageEmbed()
        .setTitle("Zadej zápatí zprávy:")
        .setFooter("Toto je zápatí")
        .setDescription("> zadej `-` pro žádné zápatí \n > pro zrušení zadávání napiš `--c`")
     
        .setColor(14596352);
        message.channel.send(embed);
    
    
        var vysledek  = new MessageEmbed()
        .setTitle(nadpis)
        .setDescription(content)
        .setColor(11053224);
        message.channel.send(vysledek);
        status = "3"

        console.log("[" + time +"] [" + time +"] [Embed]   Zadávání zápatí");
        console.log("[" + time +"] [" + time +"] [Embed]   Status = " + status);
    
    
    
    
    
    }
    
    else if(status === "3"){
      if(message.author.bot) return;
      footer = message.content;
        var embed  = new MessageEmbed()
        .setTitle("Nastav barvu zprávy")
        .setDescription("> Pro barvu ve formátu HEX napiš `hex barva` \n> Pro barvu ve formátu Decimal napiš `dec barva` \n> [Online color picker](https://colorpicker.me/) \n> pro zrušení zadávání napiš `--c`")
     
        .setColor(14596352);
        message.channel.send(embed);
    
    
        var vysledek  = new MessageEmbed()
        .setTitle(nadpis)
        .setDescription(content)
        .setFooter(footer)
        .setColor(11053224);
        message.channel.send(vysledek);
        status = "4"

        console.log("[" + time +"] [" + time +"] [Embed]   Zadávání barvy");
        console.log("[" + time +"] [" + time +"] [Embed]   Status = " + status);
    
    
    
    
    
    }
    
    
    
     else if(status === "4"){
      if(message.author.bot) return;
    
    
    
    
    
    
    
      if(message.content.startsWith('hex')){
    
     
        
        if(message.content.includes("#") === true){
          var hex = message.content.replace('hex #', '');
          color = parseInt(hex, 16);


    
    
    
    
          var vysledek  = new MessageEmbed()
          .setTitle(nadpis)
          .setDescription(content)
          .setFooter(footer)
          .setColor(color);
          message.channel.send(vysledek);

          status = "5"
    
        console.log("[" + time +"] [" + time +"] [Embed]   Zadávání barvy hex #");
        console.log("[" + time +"] [" + time +"] [Embed]   Status = " + status);
    
    
    
        }
    
        else{
          var hex = message.content.replace('hex ', '');
          color = parseInt(hex, 16);
    
    
    var vysledek  = new MessageEmbed()
    .setTitle(nadpis)
    .setDescription(content)
    .setFooter(footer)
    .setColor(color);
    message.channel.send(vysledek);
  
    status = "5"

    console.log("[" + time +"] [" + time +"] [Embed]   Zadávání barvy hex");
    console.log("[" + time +"] [" + time +"] [Embed]   Status = " + status);
    
    
    
        
        }
      }
      else if(message.content.startsWith('dec')){
          color = parseInt(message.content , 10);
    
    
        
          var vysledek  = new MessageEmbed()
          .setTitle(nadpis)
          .setDescription(content)
          .setFooter(footer)
          .setColor(color);
          message.channel.send(vysledek);
       
          status = "5"

          console.log("[" + time +"] [" + time +"] [Embed]   Zadávání barvy dec");
          console.log("[" + time +"] [" + time +"] [Embed]   Status = " + status);
    
    
      }
      else{
    
          var vysledek  = new MessageEmbed()
    
          .setTitle("Špatný typ").setDescription("> Pro barvu ve formátu HEX napiš `hex barva` \n> Pro barvu ve formátu Decimal napiš `dec barva` \n> [Online color picker](https://colorpicker.me/) \n > pro zrušení zadávání napiš `--c`");
          message.channel.send(vysledek);
          status = "4";

          console.log("[" + time +"] [Embed]  Zadávání barvy - špatný typ");
          console.log("[" + time +"] [Embed]  Status = " + status);
      }
    
     }
    
    
    
    
      
     else if(status === "5"){
    
    
        var embed  = new MessageEmbed()
        .setTitle("Zadej roomku")
        .setDescription("> **1** - nastenka \n> **2** - pokec \n> **3** - bot-prikazy \n > **4** - changelog \n> **5** - meméz \n> **6** - Help-desk \n > **7** - eventy \n > **8** - management  \n > **9** - ttlesuv bot \n> pro zrušení zadávání napiš `--c`")
        .setColor(14596352);
        message.channel.send(embed);
        status = "6";
      
      
        console.log("[" + time +"] [Embed]  Zadávání channelu");
        console.log("[" + time +"] [Embed]  Status = " + status);
      
      
      }


    
    
   
     
    else if(status === "6"){
      if(message.author.bot) return;
      console.log("[" + time +"] [Embed]  Status = " + status);
    
    
        room = message.content;
        console.log("[" + time +"] [Embed]  room:" + room);
        if(room === "1"){
          channel = "342701840686907413";
          ping_channel = '<#' + channel + '>';

          var potvrzeni_embed = new MessageEmbed()
            .setDescription("**Poslat tuto zprávu ↓↓ do roomky " + ping_channel + "?**\n\n> Pro odeslání napiš `Ano`\n> Pro zrušení zadávání napiš `--c`");

          var vysledek  = new MessageEmbed()
          .setTitle(nadpis)
          .setDescription(content)
          .setFooter(footer)
          .setColor(color);
          message.channel.send(potvrzeni_embed);
          message.channel.send(vysledek);
          status = "7";

        }




        else if(room === "2"){
          channel = "333659627352883201";


            ping_channel = '<#' + channel + '>';
  
            var potvrzeni_embed = new MessageEmbed()
              .setDescription("**Poslat tuto zprávu ↓↓ do roomky " + ping_channel + "?**\n\n> Pro odeslání napiš `Ano`\n> Pro zrušení zadávání napiš `--c`");
  
            var vysledek  = new MessageEmbed()
            .setTitle(nadpis)
            .setDescription(content)
            .setFooter(footer)
            .setColor(color);
            message.channel.send(potvrzeni_embed);
            message.channel.send(vysledek);
            status = "7";
  
          }



        





        else if(room === "3"){
          channel = "364732638369415169";


          ping_channel = '<#' + channel + '>';
  
          var potvrzeni_embed = new MessageEmbed()
            .setDescription("**Poslat tuto zprávu ↓↓ do roomky " + ping_channel + "?**\n\n> Pro odeslání napiš `Ano`\n> Pro zrušení zadávání napiš `--c`");

          var vysledek  = new MessageEmbed()
          .setTitle(nadpis)
          .setDescription(content)
          .setFooter(footer)
          .setColor(color);
          message.channel.send(potvrzeni_embed);
          message.channel.send(vysledek);
          status = "7";

        }
          
        





        else if(room === "4"){
          channel = "544068287030362145";


          ping_channel = '<#' + channel + '>';
  
          var potvrzeni_embed = new MessageEmbed()
            .setDescription("**Poslat tuto zprávu ↓↓ do roomky " + ping_channel + "?**\n\n> Pro odeslání napiš `Ano`\n> Pro zrušení zadávání napiš `--c`");

          var vysledek  = new MessageEmbed()
          .setTitle(nadpis)
          .setDescription(content)
          .setFooter(footer)
          .setColor(color);
          message.channel.send(potvrzeni_embed);
          message.channel.send(vysledek);
          status = "7";

        }
          
        





       else if(room === "5"){
          channel = "615422457418874883";


          ping_channel = '<#' + channel + '>';
  
          var potvrzeni_embed = new MessageEmbed()
            .setDescription("**Poslat tuto zprávu ↓↓ do roomky " + ping_channel + "?**\n\n> Pro odeslání napiš `Ano`\n> Pro zrušení zadávání napiš `--c`");

          var vysledek  = new MessageEmbed()
          .setTitle(nadpis)
          .setDescription(content)
          .setFooter(footer)
          .setColor(color);
          message.channel.send(potvrzeni_embed);
          message.channel.send(vysledek);
          status = "7";

        }
          

        





        else if(room === "6"){
          channel = "615422558648401953";

          ping_channel = '<#' + channel + '>';
  
          var potvrzeni_embed = new MessageEmbed()
            .setDescription("**Poslat tuto zprávu ↓↓ do roomky " + ping_channel + "?**\n\n> Pro odeslání napiš `Ano`\n> Pro zrušení zadávání napiš `--c`");

          var vysledek  = new MessageEmbed()
          .setTitle(nadpis)
          .setDescription(content)
          .setFooter(footer)
          .setColor(color);
          message.channel.send(potvrzeni_embed);
          message.channel.send(vysledek);
          status = "7";
          
        }





        else if(room === "7"){
          channel = "770656028773056592";


          ping_channel = '<#' + channel + '>';
  
          var potvrzeni_embed = new MessageEmbed()
            .setDescription("**Poslat tuto zprávu ↓↓ do roomky " + ping_channel + "?**\n\n> Pro odeslání napiš `Ano`\n> Pro zrušení zadávání napiš `--c`");

          var vysledek  = new MessageEmbed()
          .setTitle(nadpis)
          .setDescription(content)
          .setFooter(footer)
          .setColor(color);
          message.channel.send(potvrzeni_embed);
          message.channel.send(vysledek);
          status = "7";
          
        }




        
        else if(room === "8"){
          channel = "779456079514828840";


          ping_channel = '<#' + channel + '>';
  
          var potvrzeni_embed = new MessageEmbed()
            .setDescription("**Poslat tuto zprávu ↓↓ do roomky " + ping_channel + "?**\n\n> Pro odeslání napiš `Ano`\n> Pro zrušení zadávání napiš `--c`");

          var vysledek  = new MessageEmbed()
          .setTitle(nadpis)
          .setDescription(content)
          .setFooter(footer)
          .setColor(color);
          message.channel.send(potvrzeni_embed);
          message.channel.send(vysledek);
          status = "7";
          
        }

        else if(room === "9"){
          channel = "772909666601533450";


          ping_channel = '<#' + channel + '>';
  
          var potvrzeni_embed = new MessageEmbed()
            .setDescription("**Poslat tuto zprávu ↓↓ do roomky " + ping_channel + "?**\n\n> Pro odeslání napiš `ano`\n> Pro zrušení zadávání napiš `--c`");

          var vysledek  = new MessageEmbed()
          .setTitle(nadpis)
          .setDescription(content)
          .setFooter(footer)
          .setColor(color);
          message.channel.send(potvrzeni_embed);
          message.channel.send(vysledek);
          status = "7";
          
        }



      }

        else if(status === "7"){
          if(message.author.bot) return;
          if(message.content === "ano"){

            var vysledek  = new MessageEmbed()
            .setTitle(nadpis)
            .setDescription(content)
            .setFooter(footer)
            .setColor(color);

            
          client.channels.cache.get(channel).send(vysledek);
          client.channels.cache.get(message.channel.id).send("Zpráva byla odeslána");
          status = "0";
          
        
        }else if(message.content === "--c"){
          status = "0";
        }
        else{

          message.channel.send("Špatný typ");
          status = "7";
        }
        }
          
        

    
    }

    
    
    
    
    
    
    
          
    
    
    
    });

    client.login('NzcxNjY0OTQ5NDQ5MDY0NDQ5.X5va_A.HaCNx77HzNAZ27nDy93CGnkRqQ8');