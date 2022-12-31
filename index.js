const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`http://localhost:${port}`));

const discord = require ('discord.js');
const client = new discord.Client();

client.on('ready', () => {
    console.log(`${client.user.tag} is ready`);
    const channel = client.channels.cache.get("1024653746497671168");
    if (!channel) return console.error("channel vojod nadarad");
    channel.join().then(connection => {
        console.log("ba movadaghiat connect shod.");
    })
})
client.on('ready', () => {
function status() {

  let count = 0;
  const gGuild = client.guilds.cache.get("922220639429992478")
  const voiceChannels = gGuild.channels.cache.filter(c => c.type === 'voice');
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;

  let go = [`${gGuild.memberCount} Members`, `${gGuild.memberCount} Members`]
  let plsc = ["WATCHING", "COMPETING", "LISTENING"]
  let Power = Math.floor(Math.random() * go.length);

  client.user.setActivity(go[Power], { type: plsc[Power] });
}; setInterval(status, 10000)
})

client.login("OTYyNzEwMzQxNjY0NTEwMDAy.GkuPUz.l8uYLL9gN51GDC8XYCXW5JPSyu_TpJE5Hf73QE");