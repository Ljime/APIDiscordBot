const axios = require("axios");
const Discord = require("discord.js");
module.exports = {
    name: "help",
    description: "Help Function",
    execute (message, args) {
        let helpEmbed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("List of Commands")
        .setDescription("Here's all of the useless junk commands you'll ever need")
        .addFields(
            {name: "!Help", value: "Help Command!", inline: false},
            {name: "!Joke", value: "Sends a random joke", inline: false},
            {name: "!Meme", value: "Sends a random WHOLESOME :) meme", inline: false}
        );
        message.channel.send(helpEmbed);
    }
}