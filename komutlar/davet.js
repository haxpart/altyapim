const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setTitle("Beni Sunucuna Ekle ❤️")
  .setDescription("[Davet Et](https://discord.com/api/oauth2/authorize?client_id=764110574778843147&permissions=8&scope=bot) \n [Destek Sunucusu](https://discord.gg/49ZGT4)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};