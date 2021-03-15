const discord = require("discord.js");
const axios = require("axios");
const client = new discord.Client();
const prefix = "!";

client.once("ready", () => {
    console.log("LjimeBot is online :)");
})

client.on("message", async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) { //leave if message didn't start with prefix or sent by bot itself
        return;
    }
    const args =  message.content.slice(prefix.length).split(/ +/); // Remove prefix part of string and split all args into an array
    const command = args.shift().toLowerCase(); // Shift removes first element of the array and then returns it. 

    if(command == "shutdown") {
        client.destroy();
    } else if (command == "help") {
        let helpEmbed = new discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("List of Commands")
            .setDescription("Here's all of the useless junk commands you'll ever need")
            .addFields(
                {name: "!Joke", value: "Sends a random joke", inline: false},
                {name: "!Meme", value: "Sends a random WHOLESOME :) meme", inline: false}
            );
        message.channel.send(helpEmbed);
    }

    if(command == "joke") {
        axios.get("https://official-joke-api.appspot.com/random_joke")
        .then((response) => { // Gets reponse from the GET call
             console.log("RESPONSE:", response.data.setup);
             message.channel.send(response.data.setup);
             message.channel.send(response.data.punchline);
        })
        .catch((err) => { // catch error and logs it
            console.log("ERROR:" , err)
        });
    } else if(command == "meme") {
        axios.get("https://meme-api.herokuapp.com/gimme/wholesomememes")
        .then((response) => {
            message.channel.send(response.data.url);
        })
        .catch((err) => {
            console.log("Error:" , err)
        });
    } else if(command == "covid") {
        axios.get("")
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        })
    }


})  

client.login("ODE5NzE5NzgyNDc0NTgwMDA4.YEqtiQ.EzSQF37xhyOn0kOMc7FFHPNE2Ck");
