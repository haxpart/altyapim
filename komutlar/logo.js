const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor("lexcode altyapı v12 sürümüyle yeniden sizlerle.")
.setTitle("lexcodealtyapı Logo Komutları")
 .setTimestamp()
.setDescription("<a:siren:762895874975858688> **-dinamik** = Dinamik logo oluşturur.  \n <a:siren:762895874975858688> **-altın** = Altın logo oluşturur.  \n <a:siren:762895874975858688> **-banner** = Banner logo oluşturur.  \n <a:siren:762895874975858688> **-basit** = Basit logo oluşturur.  \n <a:siren:762895874975858688> **-elmas** = Elmas logo oluşturur.  \n <a:siren:762895874975858688> **-sarı** = Sarı logo oluşturur.  \n <a:siren:762895874975858688> **-neonmavi** = Neon mavi logo oluşturur.  \n <a:siren:762895874975858688> **-kalın** = Kalın logo oluşturur.  \n <a:siren:762895874975858688> **-anime** = Anime yazı tipinde logo oluşturur.  \n <a:siren:762895874975858688> **-habbo** = Habbo yazı tipinde logo oluşturur.  \n <a:siren:762895874975858688> **-arrow** = Ok işaretli logo oluşturur.  \n <a:siren:762895874975858688> **-green** = Yeşil logo oluşturur. a \n <a:siren:762895874975858688> **-alev** = Alevli logo oluşturur.  \n <a:siren:762895874975858688> **-red** = Kırmızı logo oluşturur. ")
.setImage("https://media.discordapp.net/attachments/767731753472360460/767809259755929610/lexcode.png?width=801&height=641")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}