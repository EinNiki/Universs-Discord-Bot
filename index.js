const Discord = require('discord.js')
const { fstat } = require("fs");
const bot = new Discord.Client()
const TOKEN = '' // Hier dein Discord Token


bot.on('ready', () => {
    console.log('Der Bot ist nun Online!') //Was in der Console stehen soll

    bot.user.setPresence({
        activity: {
            name: 'Universs.de', //
            type: 'PLAYING', //
        }
    })
})


//Ping Command



//Ping Command Ende


//Help Command


        
//Help Command Ende



//Command ja & Nein abfrage




//Command ja & Nein abfrage Ende



//Report System



//Report System Ende



//XP System

bot.on("message", function(message) {
    if(message.author.bot) return;

    var addXP = Math.floor(Math.random * 8) + 3;

    if(!xpfile[message.author.id]) {
        xpfile = {
            xp: 0,
            Level: 1,
            reqxp: 100
        }

        fs.writeFile("./xp.json", JSON.stringify(xpfile), function(err) {
            if(err) log.err(err);
        });
    }

    xpfile[message.author.id].xp = addXP;

    if(xpfile[message.author.id].xp > xpfile[message.author.xp].reqxp) {
        xpfile[message.author.id].xp -= xpfile[message.author.id].reqxp // xp abziehen
        xpfile[message.author.id].reqxp *= //xp die man braucht erhöhen
        xpfile[message.author.id].reqxp = Math.floor(xpfile[message.author.id].reqxp) //reqxp runden
        xpfile[message.author.id].level += 1 //1 level hinzufügen

        message.reply("ist nun Level "+xpfile[message.author.id].level+"!").then(
            msg=>msg.delete({timeout:"10000"})
        )
    }

    fs.writeFile("./xp.json", JSON.stringify(xpfile), function(err) {
        if(err) console.log(err)
    })

    if(message.content.startsWith("!level")){
        let user = message.mentions.users.first() || message.author

        let embed = new Discord.MessageEmbed()
            .setTitle("Level Karte")
            .setColor("GREEN")
            .addField("Level :", xpfile[message.author.id].level)
            .addField("xp: ", xpfile[message.author.id].xp + "/"+xpfile[message.author.id].reqxp)
            .addField("XP bis zum nächsten LeveL: ", xpfile[message.author.id].reqxp)
        message.channel.send(embed);

    }
});

//XP System Ende

bot.login(TOKEN)
