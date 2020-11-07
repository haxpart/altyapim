const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor("LexCode Altyapı v12 sürümüyle yeniden sizlerle.")
.setTitle("LexCod Altyapı Eğlence Komutları")
 .setTimestamp()
.setDescription(" <a:deli:762759703112581141> **-tersyazı** = Bir Yazıyı Bot Ters Yazar. \n <a:deli:762759703112581141> **-mcskin** = Yazınızı Minecraft Görünüşünü Atar. \n <a:deli:762759703112581141> **-fbi** = Bot FBi Gif Atar.  \n <a:deli:762759703112581141> **-token** = Tokenimi Öğrenmek İstemezmisin? < \n <a:deli:762759703112581141> **-düello** = Düello Atarsın.  \n <a:deli:762759703112581141> **-wasted** = Polis tarafından yakalanırsın. \n <a:deli:762759703112581141> **-atatürk** = Dene ve gör... (1881-1938)")
.setImage("https://media.discordapp.net/attachments/767731753472360460/767809259755929610/lexcode.png?width=801&height=641")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}