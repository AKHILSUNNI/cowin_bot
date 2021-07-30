module.exports = {
    name : 'server',
    description : "to get details about the server",
    execute(message,argu){
        message.channel.send(`Server_name : ${message.guild.name} \n TotalMembers : ${message.guild.memberCount}`);
    }
}