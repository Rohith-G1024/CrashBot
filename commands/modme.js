module.exports = {
  name : 'modme',
  description : 'makes you mod!',
  execute(message, args){
    let role = message.guild.roles.cache.find(r => r.name === "Mod")

    if(message.member.roles.cache.some(r => r.name === "Mod"))
      message.channel.send('Wake up! You\'re already a Mod... =_=');
    else {
      message.channel.send('Thathaasthu!')
      message.member.roles.add(role).catch(console.error);
    }
  }
}