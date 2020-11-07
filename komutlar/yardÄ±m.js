const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor("LexCode Altyapı")
.setTitle(" LexCode Altyapı yardım menüsüne hoşgeldin! ")
 .setTimestamp()
.setDescription("  **-eğlence** = __Eğlence komutlarını görüntülersiniz.__ \n  **-moderasyon** = __Moderasyon komutlarını görüntülersiniz.__ \n  **-kullanıcı** = __Kullanıcı komutlarını görüntülersiniz.__ \n **-logo** = __Logo komutlarını görüntülersiniz.__")
.setImage("https://media.discordapp.net/attachments/767731753472360460/767809259755929610/lexcode.png?width=801&height=641")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}