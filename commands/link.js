const discord = require("discord.js");

module.exports = {
    name : 'link',
    description : "to get the cowin official link",
    execute(message,argu){
        // to add permision role
        if(message.member.roles.cache.has("844209025536753704")){
        const linkLoader = new discord.MessageEmbed()
        .setTitle("click this text to open the links")
        .setColor("#6768")
        .setURL("https://selfregistration.cowin.gov.in/")
        .setDescription("this is the official link to cowin registration")
        .setImage("https://images.indianexpress.com/2021/02/Co-WIN.jpg")
        .setFooter("more importants to elder citizens")
        message.channel.send(linkLoader);
        }
        else{
            message.channel.send("your permition is not granted now but try again then it will be ok");
            message.member.roles.add("844209025536753704");

        }
    }
}