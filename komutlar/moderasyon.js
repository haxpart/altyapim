const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor("Lex Code Altyapı v12 sürümüyle sizlerle.")
.setTitle(" LexCode Bot Altyapı Moderasyon Komutları")
 .setTimestamp()
.setDescription(" **-sil** = Yazdığınız miktarda mesajı siler.  \n  **-ban** = Etiketlediğiniz kişiyi banlarsınız.  \n <a:ates:762960922040860674> **-kick** = Etiketlediğiniz kişiyi atarsınız.  \n  **-duyuru** = Bota duyuru yaptırırsınız.  \n  **-küfür** = Küfür engel sistemini açarsınız. \n  **-reklam** = Reklam engel sistemi açarsınız. \n  **-slowmode** = Yavaş modu ayarlarsınız.  \n  **-forceban** = Birisine id ban atarsınız.  \n  **-unban** = Birisinin banını açarsınız.  \n **-sa-as** = Bot biri sa dedimi cevap verir.  \n  **-sunucubilgi** = Sunucu bilgilerini görürsün.  \n  **-üyedurum** = Üyelerin durumlarını görürsün.  \n  **-çekiliş** = Çekiliş başlatırsınız. ")
.setImage("https://media.discordapp.net/attachments/767731753472360460/767809259755929610/lexcode.png?width=801&height=641")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}