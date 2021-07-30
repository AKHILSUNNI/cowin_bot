const discord = require("discord.js")

module.exports = {
    name : "help",
    description : "to show all available command",
    execute(message,argu){
        message.channel.send(new discord.MessageEmbed()
        .setTitle("COWIN - help")
        .setColor("#6768")
        .setFooter("stay safe,stay home")

        .addFields(
            {
                name : "-hi",
                value : "`to intract with the bot`"
            },
            {
                name : "-link",
                value : "`to register and book slot for vaccine`"
            },
            {
                name : "-help",
                value : "`to list all the commands available`"
            },
            {
                name : "-clear <number>",
                value : "`to clear particular number line of messages`"

            },
            {
                name : "-kickmember",
                value : "`to kick members out of the server`"

            },
            {
                name : "-server",
                value : "`to get details about the server`"

            },
            {
                name : "-states",
                value : "`to get list of all the states along with their id of india`"

            },
            {
                name : "-districts <state_id>",
                value : "`to get list of all the districts along with their id of india`"

            },
            {
                name : "-register <district_id>",
                value : "`list of all sessions available in your district`"

            },
            {
                name : "-reminder <district_id>",
                value : "`command to remind as every 1 hour whether the slot is available at that particular districts a part`"

            },

        )
        )
    }
}