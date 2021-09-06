const rope = require("aoi.js")
var fs = require('fs');
const bot = new rope.Bot({
  token:"",
  prefix: "+",
  mobile: false,
  fetchInvites: true
})
bot.onLeave()
bot.onJoined()
bot.onMessage()
const keep_alive = require('./http.js')
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"))
for (const file of reader) {
const command = require(`./komutlar/${file}`)
  bot.command({
    name: command.name,
    aliases: command.aliases,
    bkz: command.bkz,
    code: command.code
  });
}

bot.variables({
  prefix:"+",
  başvurukanal:"",
  botlog:"",
  botlistacik:"Kapalı",
  botlistgeliştirici:"",
  botlistbot:"",
  botlistyetkili:"",
  botlistyetkiliaçık:"Kapalı",
  botlistgeliştiriciaçık:"Kapalı",
  botlistbotacik:"Kapalı",
  botlistbotidacik:"Kapalı",
  botlistbotid:""
  });

bot.command({
 name:"$alwaysExecute", 
 code:`$deletecommand
 $wait[6]
$onlyForChannels[$getServerVar[başvurukanal];]
$onlyIf[$hasPerms[$authorID;admin]==false;]
$suppressErrors[]`,
nonPrefixed:true})

bot.readyCommand({
    channel: "SESAFKKANALID",
    code: `Ben hazırım.
$joinVC[867148645529813052]`
})
bot.readyCommand({ 
  channel: "SESAFKKANALID", 
  code: `
  $djsEval[
    let Seslikanal = client.channels.cache.get("SESAFKKANALID")
    if (Seslikanal) Seslikanal.join()
  ]
  $suppressErrors
  Sesli Kanala Başarıyla Girdim
  ` 
})

bot.status({
  text:"Wizard Development ✨",
  type:"PLAYING",
  status:"online",
  time: 12
})

bot.status({
  text:"RopE#0007 🧙‍♂️",
  type:"PLAYING",
  status:"online",
  time: 12
})

bot.status({
  text:"+bot-ekle 📌",
  type:"PLAYING",
  status:"online",
  time: 12
})

