
const axios = require("axios");
module.exports = {
    name: "gif",
    description: "Random gif",
    async execute (message, args) {
        let keywords = "pokemon";
        if(args.length > 0) {
            keywords = args.join(" ");
        }
        console.log(keywords);
        axios.get(`https://g.tenor.com/v1/search?q=${keywords}&key=904IVC2O2EGI&contentfilter=high`)
        .then((response) => { // Gets reponse from the GET call
            let i = Math.floor(Math.random() * response.data.results.length);
            message.channel.send(response.data.results[i].url);
        })
        .catch((err) => { // catch error and logs it
            console.log("ERROR:" , err)
        });
    }
}