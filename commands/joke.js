const axios = require("axios");
module.exports = {
    name: "joke",
    description: "Random joke",
    async execute (message, args) {
        axios.get("https://official-joke-api.appspot.com/random_joke")
        .then((response) => { // Gets reponse from the GET call
             message.channel.send(response.data.setup);
             message.channel.send(response.data.punchline);
        })
        .catch((err) => { // catch error and logs it
            console.log("ERROR:" , err)
        });
    }
}

//	904IVC2O2EGI https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=8