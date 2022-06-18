module.exports = {
  name : 'demod',
  description : 'takes your mod!',
  execute(message, args){
    let role = message.guild.roles.cache.find(r => r.name === "Mod")

    if(message.member.roles.cache.some(r => r.name === "Mod")){
      message.channel.send('Thathaasthu!')
      message.member.roles.remove(role).catch(console.error)
    }  
    else {
      message.channel.send('Quit dreaming, Peasant...=_=')
    }
  }
}