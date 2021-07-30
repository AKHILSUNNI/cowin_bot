module.exports ={
    name : "kickmember",
    description : "to kick members out of the server",
    execute(message,argu){
        
        // to take currently mentioned person
        const memberMention = message.mentions.users.first();
        if(memberMention){

           const kickMember = message.guild.members.cache.get(memberMention.id);
           kickMember.kick();
           message.channel.send("`${memberMention} is successfully been kicked`");
        }
        else{

            message.channel.send("`plz mention the person to be kicked`");
            
        }
    }
}