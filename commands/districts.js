const axios = require("axios");

const discord = require("discord.js");

var option ={
    url : URL,
    method : "GET",
    headers: {
        Host: "cdn-api.co-vin.in",
        "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
    },
};


module.exports = {
   name : "districts",
   description : "to get the list of districts using the api",
   arg  : true,
   usage : "<states_id>",
   execute(message,argu){

     axios
     .get(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${argu[0]}`,
        option
       )
        .then(function(response){
            
            const data = response.data;
            const districts = data.districts;
            const available = districts.length;
            const m = Math.round((districts.length)/4) ;
            a1 = m;
            a2 = m + m;
            a3 = m + m +m;
            
            if(available === 0){ 

                return message.channel.send("`currently no centers are avilable at your district`");

            }
            const districtEmbed = new discord.MessageEmbed();
            districtEmbed.setTitle("LIST OF THE DISTRICTS")
            districtEmbed.setDescription("to get list of all the districts along with their id of india")
            districtEmbed.setColor("#FFD700")
            for( let i =0 ; i < a1 ; i++){

                districtEmbed.addField(
                    `${i+1} , ${districts[i].district_name}    ${districts[i].district_id}`,
                    `for checking registeration at this district  type next command as : -register ${districts[i].district_id}  `
                );
        
            }

        message.channel.send(districtEmbed);

        //second embed
        const second = new discord.MessageEmbed();
        second.setColor("#FFD700")
        for( let i = a1 ; i < a2 ; i++){

            second.addField(
                `${i+1} , ${districts[i].district_name}    ${districts[i].district_id}`,
                `for checking registeration at this district  type next command as : -register ${districts[i].district_id}  `
            );
    
        }

        message.channel.send(second);

        //third embed

        const third = new discord.MessageEmbed();
        third.setColor("#FFD700")
        for( let i = a2 ; i < a3 ; i++){

            third.addField(
                `${i+1} , ${districts[i].district_name}    ${districts[i].district_id}`,
                `for checking registeration at this district  type next command as : -register ${districts[i].district_id}  `
            );
    
        }

        message.channel.send(third);

        //last embed

        const last = new discord.MessageEmbed();
        last.setColor("#FFD700")
        last.setFooter("\`!stay safe,stay home\`")
        for( let i = a3 ; i < districts.length ; i++){

            last.addField(
                `${i+1} , ${districts[i].district_name}    ${districts[i].district_id}`,
                `for checking registeration at this district  type next command as : -register ${districts[i].district_id}  `
            );
    
        }

        message.channel.send(last);



        message.channel.send(
            `Register for a district by the command : \` -register <district id> \``
        );

     })
    .catch(function (error){
        console.log(error);
        console.log("pani palli");
    })


    .then(function(){

    });

   }
}