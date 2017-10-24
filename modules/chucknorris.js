var unirest = require('unirest');
var Discord = require('discord.js');

module.exports = {
    name: 'chucknorris',
    type: 'fun',
    usage: 'chucknorris',
    permission: 1,
    help: 'Gets a random Chuck Norris joke.',
    main: function (bot, msg) {
        unirest.get('https://api.chucknorris.io/jokes/random')
            .end(function (result) {
                var joke = JSON.parse(result.body)
                var e = new Discord.RichEmbed()
                    .setFooter("Powered by chucknorris.io")
                    .setTimestamp()
                    .setAuthor("Chuck Norris Joke", joke.icon_url, joke.url)
                    .setDescription(joke.value)

                msg.channel.send({ embed: e })
            })
    }
};