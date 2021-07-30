//to acess the axios 
const axios = require("axios");

const discord = require("discord.js");

//options for axios
var options ={
    url : URL,
    method : "GET",
    headers: {
        Host: "cdn-api.co-vin.in",
        "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
    },

};


module.exports = {
    name : "states",
    description : "to get list of all the states along with their id of india",
    arg: false,
    usage: "<state id>",
    execute(message,argu){
        
        //to get list from api

        axios.get(
            `https://cdn-api.co-vin.in/api/v2/admin/location/states`,
           options
        )

        .then(function (record){
          const data = record.data;
          const states = data.states;
          const available = states.lenght;
          const half = Math.round(states.length/2);
           
          if(available == 0){
              message.channel.send(`currently no sections are available in your states`);
          }

          const stateEmbed = new discord.MessageEmbed();
          stateEmbed.setTitle("STATE LIST AND ID")
          stateEmbed.setColor("#603986")
          stateEmbed.setDescription(`LIST OF STATES ALONG WITH THEIR ID OF INDIA`)
              for (let i = 0; i < (states.length/2); i++) {
                    stateEmbed.addField(
                        `${states[i].state_id}  ${states[i].state_name}`,
                        `for selecting this state type next command as : -districts ${states[i].state_id}  `
                    );
                }

         message.channel.send(stateEmbed);

         //second embed
         const second = new discord.MessageEmbed();
         
           second.setColor("#603986")
           second.setFooter("!stay safe , stay home")
           for (let i = half; i < states.length; i++) {
            second.addField(
                `${states[i].state_id}  ${states[i].state_name}`,
                `for selecting this state type next command as : -districts ${states[i].state_id}  `
            )
        }

         message.channel.send(second);
         message.channel.send( `Inorder to select a state and list the districts us :\` -districts <state id> \``)
        })

        .catch(function (error) {
            // handle error
            console.log(error);
            console.log("pettu poyallode");
        })
        .then(function () {
            // always executed
        });
    }
}