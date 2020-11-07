const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("PİNK")
.setAuthor("lexcode altyapı v12 sürümüyle yeniden sizlerle.")
.setTitle("lex code altyapı Kullanıcı Komutları")
 .setTimestamp()
.setDescription("<a:yan:762897609345990696> **-avatar** = Avatarınıza bakarsınız. \n <a:yan:762897609345990696>  **-yetkilerim** = Yetkilerini görürsün.  \n <a:yan:762897609345990696> **-profil** = Profilini görürsün.  \n <a:yan:762897609345990696> **-sunucuresmi** = Sunucu resmini gösterir.  \n <a:yan:762897609345990696> **-ping** = Botun Pingine Bakarsın.  \n <a:yan:762897609345990696> **-id** = Birisinin id'sine Bakarsın.  \n <a:yan:762897609345990696> **-davet** = Beni Sunucuna Ekle.  \n <a:yan:762897609345990696> **-botbilgi** = Bot istatistiklerini görürsünüz. \n <a:yan:762897609345990696> **-bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir. ")
.setImage("https://media.discordapp.net/attachments/767731753472360460/767809259755929610/lexcode.png?width=801&height=641")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}