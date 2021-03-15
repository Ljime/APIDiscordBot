const Discord = require("discord.js");
const axios = require("axios");
const client = new Discord.Client();
const prefix = "!";
const fs = require('fs'); // Node's native file system module.

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) { // All files in commandFiles.
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command); // set a new item in the Collection
}

client.once("ready", () => {
    console.log("LjimeBot is online :)");
})

client.on("message", async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) { //leave if message didn't start with prefix or sent by bot itself
        return;
    }
    const args =  message.content.slice(prefix.length).split(/ +/); // Remove prefix part of string and split all args into an array
    const command = args.shift().toLowerCase(); // Shift removes first element of the array and then returns it. 

    if(command == "joke") {
        client.commands.get("joke").execute(message, args);
    } else if(command == "meme") {
        client.commands.get("meme").execute(message, args);
    } else if (command == "help") {
        client.commands.get("help").execute(message, args);
    }
}) 

client.login("ODE5NzE5NzgyNDc0NTgwMDA4.YEqtiQ.EzSQF37xhyOn0kOMc7FFHPNE2Ck");
