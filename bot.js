const Discord = require("discord.js");
const myid = ['569861608344518660'];
const prefix = ['.'];
const cmd = require("node-cmd")
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client();
const client20 = new Discord.Client();
const client21 = new Discord.Client();
const client22 = new Discord.Client();
const client23 = new Discord.Client();
const client24 = new Discord.Client();
const client25 = new Discord.Client();
const client26 = new Discord.Client();
const client27 = new Discord.Client();
const client28 = new Discord.Client();
const client29 = new Discord.Client();
const client30 = new Discord.Client();
const client31 = new Discord.Client();
const client32 = new Discord.Client();
const client33 = new Discord.Client();
const fs = require("fs");
const adminprefix = "$";
const devs = ['569861608344518660'];
//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ



client.login("NzIwNzAwNzIxMzY4MTM3ODE5.XuJy3w.a3lqxs7rEH4fMqguXXMDg0Gk1I0");
client2.login("NzIwNzAwODk2NjYwNTUzODU4.XuJzew.IbEd-zvkQFdQZZMpkQb0YF6SKYw");
client3.login("NzIwNzAxNDg5NzI2NjE5NjQ5.XuJ1mg.ECC5OExNW8LSbp4Onao8tJ5S83Y");
client4.login("NzIwNzAzNzY3OTI1ODgyOTUw.XuJ2fw.fUi-1uwzmlxKRf3fx1FONonbIug");
client5.login("NzIwNzA0NzQ1MTEwNjM0NTg2.XuJ2-g.mPv5SKdRIVZ4vbKYxTezRokWoYI");
client6.login("NzIwNzA1MjYxNDUwMjk3NDM0.XuJ3yA.FyDq01qCYcSoflA4Rrz7NYO5Ams");
client7.login("NzIwNzA2MjU4NTc5MDk1NTkz.XuJ5MQ.IB4SNzGLrZJA3loTwzL60cz3c9w");
client8.login("NzIwNzA3ODIxMDIwMTE5MDYw.XuJ57g.avFhSjQYvu5y08DmGnCDMg1WtRg");
client9.login("NzIwNzA4NTM2NDQyNjgzNDE1.XuJ6rA.LHskoSHJVZrsXC4qugcrmM7cQ9I");
client10.login("NzIwNzA5Mzc0MDMyNzQwMzky.XuJ7lg.eWfW6IFtzpnmFwBy4EtHvc3ruxo");
client11.login("NzIwNzEwNDg0MTE4MjA4NTYy.XuJ8rw.lkJU85-OZPAXiBIM-5NUvZJDJOY");
client12.login("NzIwNzEyOTEzMDYwMzY0MzI5.XuJ-Ng.FbUyTvyp4kuQy2uEJOrg7Hiy3oA");
client13.login("NzIxMDIyNTYyNjQ5MjQzNzE4.XuOemA.8E0LExUp7F0giWZr-L1y3F-5Ehk");
client14.login("NzIxMDI0NDE0NjAyMzYyODkw.XuOgYg.lKaKgBs8XFmqhf1HYs3hT7HTtxA");
client15.login("NzIxMDI0NjQwNTc5MDEwODMy.XuOg4w.1s5SxeO7P0fYK3YCs3Q7cG64JoA");
client16.login("NzIxMDI1MTg3MDI1MjU2NDcw.XuOhgw.iPF88qS7_bWlg8FuB05wvGTq9GM");
client17.login("NzIxMDI1ODU0ODkyODAyMTA4.XuOiAg.LRuwkvQAGSnO-o4XR5Qjc4Gu3M0");
client18.login("NzIxMDI2MzIyMDMzNTQxMTUx.XuOikg.odNIOoDq1fjNwjgD-JhkJADp4Cg");
client19.login("NzIxMDI2OTI1OTY3MTc5Nzg5.XuOjaw.VT9iEZpS6Oe99ClpkU8i1P1z7-g");
client20.login("NzIxMDI3ODU2NDk4NTU3MDIw.XuOj8A.85y3pSWzccLEM78yjEEYsosTLzs");
client21.login("NzIxMDMxMzg5NDM2MzEzNjQx.XuOm0Q.pBuaT3HEgZkci8-tQv52RAsIT3E");
client22.login("NzIxMDMxNTg3NjEyOTgzNDM2.XuOnkw.eCM09mCvo2AvkFrwtF3hZVUF2bs");
client23.login("NzIxMDM5MTc1NDczODIzODQ2.XuOuEQ.qgrqWP8TJpi6VXsWiYsxspypqI4");
client24.login("NzIxMDM5MjcxMTQxNzAzNzUw.XuOvFw.dixPoUMJc-eJdPtWsk13WSosQ-E");
client25.login("NzIxMDQwNjk1Mzc2MzQ3MTc4.XuOvoQ.AgMt5D2jIQwA_r5NAmwRkT5wz6I");
client26.login("NzIxMDQwOTc0MjQ3MzYyNTYy.XuOwVA.wTfxwwwQuyjd2ZSSx0Qihd0eSs0");
client27.login("NzIxMDQxODM3NTMxNDYzNzQy.XuOw6w.nKUu0bFzhVukda38eqp2QAUQGVo");
client28.login("NzIxMDQyNDk0MTI0NDU3OTk0.XuOyeA._zR16WrkwmJNhaQexTNQV-xL1aQ");
client29.login("NzIxMDQ0MDg5MzY1MDY5ODY1.XuO0Gw.3gETtzLifDrgPygfa4LnxEC0R-s");
client30.login("NzIxMDQ1ODA3MzgxNjEwNTMx.XuO0kw.c-YjIV-Gu2oGD9xqLNidmcfu134");
client31.login("NzIxMDQ2ODYzMzM5NDU0NTA2.XuO1oA.goIb9x3XMCxbTH3LHTSyrRblqo4");
client32.login("NzIxMDQ3NTA3NjMwNTU1MTY2.XuO2MA.tRnKTalQbqBddOoqRtXzIJSNY90");






client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});


client2.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client2.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});



client3.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client3.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});


client4.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client4.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});


client5.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client5.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});



client6.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client6.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});



client7.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client7.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});


client8.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client8.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client9.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client9.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client10.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client10.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});


client11.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client11.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client12.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client12.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client13.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client13.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client14.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client14.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client15.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client15.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});


client16.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client16.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client17.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client17.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client18.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client18.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client19.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client19.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client20.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client20.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client21.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client21.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client22.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client22.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});


client23.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client23.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client24.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client24.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client25.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client25.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client26.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client26.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client27.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client27.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client28.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client28.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client29.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client29.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client30.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client30.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client31.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client31.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

client32.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
if (message.content.startsWith(adminprefix + 'playing')) {
  client32.user.setGame(argresult)
    message.channel.sendMessage(`**:white_check_mark: , The Playing Status Has Been Changed To : ${argresult}**`).then(message => {message.delete(6000)})
}
});

