module.exports = {
  name: 'command',
  description:'Embeds',
  execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
/*     .setColor('#f6f900')
    .setTitle('Title')
    .setURL('https://www.color-hex.com/')
    .setDescription('This is an embed')
    .addFields(
      {name : 'lol1',value: 'loloolololololollol'},
      {name : 'lol2',value: 'lololololololololololololol'}
    )
    .setImage('https://wp-mktg.prod.getty1.net/istockcontentredesign/wp-content/uploads/sites/5/2021/03/2021_iStock_Hexcolors_Hero.jpg.jpeg')
    .setFooter('Click this message for hex colors');
 */ .setColor('#f6f900')
    // .setTitle('Title')
    // .setURL('https://www.color-hex.com/')
    .setDescription('This is an embed')
    // .addFields(
    //   {name : 'lol1',value: 'loloolololololollol'},
    //   {name : 'lol2',value: 'lololololololololololololol'}
    // )
    // .setImage('https://wp-mktg.prod.getty1.net/istockcontentredesign/wp-content/uploads/sites/5/2021/03/2021_iStock_Hexcolors_Hero.jpg.jpeg')
    // .setFooter('Click this message for hex colors');

    message.channel.send({embeds:[newEmbed]});
  }
}