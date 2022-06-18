module.exports = {
  name : 'eros',
  description : 'this is eros command!',
  execute(message, args){
    if(message.member.roles.cache.has('886274256479064136')){
      message.channel.send('Erosennin Nishanth!!');
    }
    else{
      message.channel.send('OK Boomer!');
    } 

  }
}