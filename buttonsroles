const Discord = require('discord.js')
const config = require('../config.json')

module.exports = {
    name: 'buttonsroles',
    author: 'lipey',

    run: async (client, message, args, interaction) => {
      if (!message.member.permissions.has("MANAGE_ROLES")) {
        message.reply({ content: `Você não possui permissão para usar este comando :c`})
    } else {

      let cargo1 = new Discord.MessageButton().setCustomId("1").setLabel("Rei").setStyle("SUCCESS").setEmoji("👑")
      let cargo2 = new Discord.MessageButton().setCustomId("2").setLabel("Príncipe").setStyle("SUCCESS").setEmoji("💎")
      let cargo3 = new Discord.MessageButton().setCustomId("3").setLabel("Duque").setStyle("SUCCESS").setEmoji("✨")
      let cargo4 = new Discord.MessageButton().setCustomId("4").setLabel("Nobre").setStyle("SUCCESS").setEmoji("🪙")



      let row = new Discord.MessageActionRow().addComponents(cargo1, cargo2, cargo3, cargo4)



      let embed = new Discord.MessageEmbed()
      .setDescription(`> **Selecione seu cargo**\n\n> Clique nos **botões** para adquirir seus respectivos cargos\n> \n> Caso queira retirar o seu **cargo** clique no botão novamente\n\n> **Cargos** \n\n> 👑 - **Rei**\n> 💎 - **Príncipe**\n> ✨ - **Duque**\n> 🪙 - **Nobre**`)
      .setColor("WHITE")
      .setTimestamp(new Date())

      message.channel.send({ embeds: [embed], components: [row] })
    


}}}

