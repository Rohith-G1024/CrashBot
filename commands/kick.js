module.exports = {
  name : 'kick',
  description : 'kicks a member!',
  execute(message, args){
    let role = message.guild.roles.cache.find(r => r.name === "Mod")

    if(message.member.permissions.has("KICK_MEMBERS"))
      message.channel.send('You can kick members.');
    else {
      message.channel.send('You dont have permission to kick members.')
    }
  }
}