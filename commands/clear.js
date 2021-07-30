module.exports ={
    name : "clear",
    description : "to clear particular number line of messages",
    arg : true,
    usage : "<number of message to be deleted>",
    async  execute(message,argu){

       if(isNaN(argu[0])) return message.channel.send("`plz type a valid number`");
       if(!argu[0]) return message.channel.send("`plz type the number of messages to be cleared`");
       if(argu[0] > 100) return message.channel.send("`we cannot delete more than 100 messages`");
       if(argu[0] < 1) return message.channel.send("`we must delete atleast one message`");

    await message.channel.messages.fetch({limit: argu[0]}).then(messages =>{
        message.channel.bulkDelete(messages);
    }); 
 }
}