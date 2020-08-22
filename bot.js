const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://boooot1.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const myid = ['707741271334322238']
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();


client.login("NzQ2ODM3NzkwMTI5NTIwNzYy.X0GJJg.yUYTwfPCywDLX5LJlyxErDgZhTM");
client2.login("NzQ2ODM4NjQ3NTQ1OTIxNjY2.X0GJ2Q.AJDdU9bBmbXl5FwBwb-xm1o_LC8");
client3.login("NzQ2ODM5MDgyODM0OTg1MDky.X0GKYg.0XY3MyhTfrdpNbbYP9deNtEO7eo");
client4.login("NzQ2ODM5ODA3MTk1MzQ5MDQy.X0GLBQ.sfZGltZb7IrDyU7PHrq9u39_Irg");
client5.login("NzQ2ODQxMjk3Nzk2NDY0NzEw.X0GMWg.KxZf7mcD4IKnGXmQIVaovdXtcmI");
client6.login("NzQ2ODQxODQ4NDA4MDQ3NzM4.X0GNIg.xZpRtj3ck-OILZIhESz6RKUk14M");



client.on('message', message => {
  if (message.content === '!d') {
message.channel.send('#daily')
  }
  if(message.content === '!c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("!s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client2.on('message', message => {
  if(message.content === '@d'){
message.channel.send('#daily')
  }
  if(message.content === '@c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("@s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client3.on('message', message => {
  if(message.content === '#d'){
message.channel.send('#daily')
  }
  if(message.content === '#c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("#s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client4.on('message', message => {
  if (message.content === '$d') {
message.channel.send('#daily')
  }
  if(message.content === '$c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("$s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client5.on('message', message => {
  if(message.content === '%d'){
message.channel.send('#daily')
  }
  if(message.content === '%c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("%s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client6.on('message', message => {
  if (message.content === '^d') {
message.channel.send('#daily')
  }
  if(message.content === '^c'){
message.channel.send('#credits')
  }
  if(message.content.startsWith("^s")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});



client.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`**هاااي :) **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`**نو توك ويذ مي **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`**يااااااااااااااااي **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client4.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`**يانوووووووب **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client5.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`**انت مز **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client6.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 9000; x++) {
        message.channel.send(`**خد قلبي **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});



client.on('message', message => {
    if(message.content === '!rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client2.on('message', message => {
    if(message.content === '!rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client3.on('message', message => {
    if(message.content === '!rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client4.on('message', message => {
    if(message.content === '!rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client5.on('message', message => {
    if(message.content === '!rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client6.on('message', message => {
    if(message.content === '!rep'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});