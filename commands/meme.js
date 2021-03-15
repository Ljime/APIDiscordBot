const axios = require("axios");
module.exports = {
    name: "meme",
    description: "Random meme",
    async execute (message, args) {
        axios.get("https://meme-api.herokuapp.com/gimme/wholesomememes")
        .then((response) => {
            message.channel.send(response.data.url);
        })
        .catch((err) => {
            console.log("Error:" , err)
        });
    }
}