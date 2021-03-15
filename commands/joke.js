const axios = require("axios");

module.exports.execute = {
    name: "joke",
    description: "Tells you a dad joke",
    run = async (message) => {
        axios.get("https://official-joke-api.appspot.com/random_joke")
        .then((response) => { // Gets reponse from the GET call
             console.log("RESPONSE:", response.data.setup);
             message.channel.send(response.data.setup);
             message.channel.send(response.data.punchline);
        })
        .catch((err) => { // catch error and logs it
            console.log("ERROR:" , err)
        });
    }
};