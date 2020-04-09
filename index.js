const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'Njk3MTQyMDA4ODY2OTMwODU4.Xo-Bvw.srYJE9t7Z0mmPx0hyaV5YZ7xIaM';

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('Bot online!!');
})

bot.on('message', message=>{
   
    let args = message.content.substring(PREFIX.length).split(" ")

    switch(args[0]){
        case 'ping':
            message.channel.send('pong je kanker oma!');
            break;
        case 'merch':
            message.channel.send('Oh shit hoorde ik daar merch, ja dat hoorde ik goed. Ga nu naar https://knolpower.nl/ en haal je kanker vette merchandise van Enzo Kanker.');
            break;
        case 'knolpower':
            message.channel.send("JAAAA BROEDER KNOLPOWER!!");
            break;
    }
})

bot.on('message', message=>{

    if(message.content === "enzoknol is geen leuk kanaal"){
        message.reply('Zomaar lieg jij verschrikkelijke faggot.');
    }else if(message.content === "osama"){
        message.channel.send("ALLAHUAKBAR!!");
    }
})

bot.login(token);
