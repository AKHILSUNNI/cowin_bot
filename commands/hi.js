module.exports = {
    name : 'hi',
    description : "to introduce to bot",
    execute(message,argu){
        message.channel.send("hi, iam  covinBot  how  can  i  help  u  sir".toUpperCase());
        const helpMessage ="`type -help to view all available commands`";
        message.channel.send(helpMessage);
 
    }
}