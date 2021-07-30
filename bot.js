// create an object to access module discord.js

const discord = require('discord.js');

//to access mongoose

const mongoose = require("mongoose");

//to create an secure dotenv enviornment

require("dotenv").config();

const client = new discord.Client();

//to access command from seperate file

const fs = require('fs');
const { measureMemory } = require('vm');
const { error } = require('console');
client.commands = new discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);
    client.commands.set(command.name,command);
}

//make bot online
client.once("ready",() =>{
    console.log("covinBot is online");
});

//creating commands

const prefix = process.env.PREFIX;

client.on("message",message =>{
 if(!message.content.startsWith(prefix) || message.author.bot)return;
 const argu =message.content.slice(prefix.length).split(/ +/);
 const commandName = argu.shift().toLowerCase();
  
 //command handling
 if( !client.commands.has(commandName))return;

 const command = client.commands.get(commandName);

 if(command.arg && !argu.length){
    let reply = `You didnt provide any arguments ${message.author}`;
 
 if(command.usage){
     reply += `\n you must use the proper usage and it is \` ${prefix}${command.name} ${command.usage}\``;
 }
  return message.channel.send(reply);
 
}
 try{
     command.execute(message,argu);
 }
 catch(error){
     console.error(error);
     return message.channel.send("error was occured while executing the code");
 }
});

//establishing connection

mongoose.connect(process.env.MONGODB,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    userFindAndModify : false
}).then(() =>{
    console.log("Connected to the database");

}).catch((error) =>{
    console.log(error);
});

// login to the bot id

client.login(process.env.botToken);