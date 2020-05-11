const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$"
const prettySeconds = require("pretty-seconds")
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./data.json' , 'utf8'));
const check = JSON.parse(fs.readFileSync('./check.json' , 'utf8'));
const prettyMilliseconds = require('pretty-ms');
//all copyrights reserved for @!Baron#0001
client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;

  if(message.content.startsWith(prefix + 'linkUses')) {
  if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return message.reply('**I need `CREATE_INSTANT_INVITE` Permission**').then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }))
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You need `ADMINISTRATOR` Permission**').then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }))

          var Embed = new Discord.MessageEmbed()
          .setThumbnail(message.author.avatarURL())
          .setTitle(`**Link Uses**`)
          .setDescription(`**React With ❤️ for 1use\nReact With 🖤 for 5uses\nReact With 💚 for 10uses\nReact With 💛 for 25uses\nReact With 💙 for 50uses\n️React With 🤎️ for 100uses**`)
          await message.channel.send(Embed).then(async msg => {

          await msg.react('❤️')
          await msg.react('🖤')
          await msg.react('💚')
          await msg.react('💛')
          await msg.react('💙')
          await msg.react('🤎')

          var oneUses = (reaction, user) => reaction.emoji.name === '❤️' && user.id === message.author.id;
          var fiveUses = (reaction, user) => reaction.emoji.name === '🖤' && user.id === message.author.id;
          var tenUses = (reaction, user) => reaction.emoji.name === '💚' && user.id === message.author.id;
          var twintyFiveUses = (reaction, user) => reaction.emoji.name === '💛' && user.id === message.author.id;
          var fiftyUses = (reaction, user) => reaction.emoji.name === '💙' && user.id === message.author.id;
          var hundredUses = (reaction, user) => reaction.emoji.name === '🤎' && user.id === message.author.id;

          var mraW7da  = msg.createReactionCollector(oneUses, { time: 60000 });
          var khamsMrat = msg.createReactionCollector(fiveUses, { time: 60000 });
          var asherMrat = msg.createReactionCollector(tenUses, { time: 60000 });
          var khamsaW3shren = msg.createReactionCollector(twintyFiveUses, { time: 60000 });
          var khamseen = msg.createReactionCollector(fiftyUses, { time: 60000 });
          var myaa = msg.createReactionCollector(hundredUses, { time: 60000 });

          mraW7da.on("collect", async r => {
          if(!data[message.guild.id]) {
          await msg.delete()
          await message.channel.send(`**Uses \`1 time\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: '86400',
          uses: '1'
          }
          } else if (data[message.guild.id].expire) { //all copyrights reserved for @!Baron#0001
          var expire = data[message.guild.id].expire;
                    await msg.delete()
          await message.channel.send(`**Uses \`1 times\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: expire,
          uses: '1'
          }
          };
          fs.writeFile("./data.json", JSON.stringify(data), (err) => {
          if (err) console.error(err)
          })
          })

          khamsMrat.on("collect", async r => {
          if(!data[message.guild.id]) {
          await msg.delete()
          await message.channel.send(`**Uses \`5 times\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: '86400',
          uses: '5'
          }
          } else if (data[message.guild.id].expire) {
          var expire = data[message.guild.id].expire;
                    await msg.delete()
          await message.channel.send(`**Uses \`5 times\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: expire,
          uses: '5'
          }
          };
          fs.writeFile("./data.json", JSON.stringify(data), (err) => {
          if (err) console.error(err)
          })
          })

          asherMrat.on("collect", async r => {
          if(!data[message.guild.id]) {
          await msg.delete()
          await message.channel.send(`**Uses \`10 times\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: '86400',
          uses: '10'
          }
          } else if (data[message.guild.id].expire) {
          var expire = data[message.guild.id].expire;
                    await msg.delete()
          await message.channel.send(`**Uses \`10 times\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: expire,
          uses: '10'
          }
          };
          fs.writeFile("./data.json", JSON.stringify(data), (err) => { //all copyrights reserved for @!Baron#0001
          if (err) console.error(err)
          })
          })

          khamsaW3shren.on("collect", async r => {
          if(!data[message.guild.id]) {
          await msg.delete()
          await message.channel.send(`**Uses \`25 times\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: '86400',
          uses: '25'
          }
          } else if (data[message.guild.id].expire) { //all copyrights reserved for @!Baron#0001
          var expire = data[message.guild.id].expire;
                    await msg.delete()
          await message.channel.send(`**Uses \`25 times\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: expire,
          uses: '25'
          }
          };
          fs.writeFile("./data.json", JSON.stringify(data), (err) => {
          if (err) console.error(err)
          })
          })

          khamseen.on("collect", async r => {
          if(!data[message.guild.id]) {
          await msg.delete()
          await message.channel.send(`**Uses \`50 times\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: '86400',
          uses: '50'
          }
          } else if (data[message.guild.id].expire) {
          var expire = data[message.guild.id].expire;
                    await msg.delete()
          await message.channel.send(`**Uses \`50 times\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: expire,
          uses: '50'
          }
          };
          fs.writeFile("./data.json", JSON.stringify(data), (err) => {
          if (err) console.error(err)
          })
          })

          myaa.on("collect", async r => {
          if(!data[message.guild.id]) {
          await msg.delete()
          await message.channel.send(`**Uses \`100 times\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: '86400',
          uses: '100'
          }
          } else if (data[message.guild.id].expire) {
          var expire = data[message.guild.id].expire;
                    await msg.delete()
          await message.channel.send(`**Uses \`100 times\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: expire,
          uses: '100'
          }
          };
          fs.writeFile("./data.json", JSON.stringify(data), (err) => {
          if (err) console.error(err)
          })
          })
          })


          } else if(message.content.startsWith(prefix + 'linkExpire')) {
          if(!message.guild.member(client.user).hasPermission('ADMINISTRATOR')) return message.reply('**I need `CREATE_INSTANT_INVITE` Permission**').then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }))
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You need `ADMINISTRATOR` Permission**').then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }))

           var Embed = new Discord.MessageEmbed()
          .setThumbnail(message.author.avatarURL())
          .setTitle(`**Link Expire Time**`)
          .setDescription(`**React With ❤️ for 30m\nReact With 🖤 for 1h\nReact With 💚 for 6h\nReact With 💛 for 12h\nReact With 💙 for 1d\n️React With 🤎️ for Never Expire**`)
          await message.channel.send(Embed).then(async msg => {

          await msg.react('❤️')
          await msg.react('🖤')
          await msg.react('💚')
          await msg.react('💛')
          await msg.react('💙')
          await msg.react('🤎')

          var halfHour = (reaction, user) => reaction.emoji.name === '❤️' && user.id === message.author.id;
          var oneHour = (reaction, user) => reaction.emoji.name === '🖤' && user.id === message.author.id;
          var sixHours = (reaction, user) => reaction.emoji.name === '💚' && user.id === message.author.id;
          var twelveHours = (reaction, user) => reaction.emoji.name === '💛' && user.id === message.author.id;
          var oneDay = (reaction, user) => reaction.emoji.name === '💙' && user.id === message.author.id;
          var neverExpired = (reaction, user) => reaction.emoji.name === '🤎' && user.id === message.author.id;

          var nsfSa3a  = msg.createReactionCollector(halfHour, { time: 60000 });
          var sa3a = msg.createReactionCollector(oneHour, { time: 60000 });
          var setSa3at = msg.createReactionCollector(sixHours, { time: 60000 });
          var etna4rSa3a = msg.createReactionCollector(twelveHours, { time: 60000 });
          var youmWa7d = msg.createReactionCollector(oneDay, { time: 60000 });
          var mby5ls4 = msg.createReactionCollector(neverExpired, { time: 60000 });

          nsfSa3a.on("collect", async r => {
          if(!data[message.guild.id]) {
          await msg.delete()
          await message.channel.send(`**Expiring after \`30m\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: '1800',
          uses: '5'
          }
          } else if (data[message.guild.id].uses) { //all copyrights reserved for @!Baron#0001
          var uses = data[message.guild.id].uses;
                    await msg.delete()
          await message.channel.send(`**Expiring after \`30m\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: '1800',
          uses: uses
          }
          };
          fs.writeFile("./data.json", JSON.stringify(data), (err) => {
          if (err) console.error(err)
          })
          })

          sa3a.on("collect", async r => {
          if(!data[message.guild.id]) {
          await msg.delete()
          await message.channel.send(`**Expiring after \`1h\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: '3600',
          uses: '5'
          }
          } else if (data[message.guild.id].uses) {
          var uses = data[message.guild.id].uses;
                    await msg.delete()
          await message.channel.send(`**Expiring after \`1h\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: '3600',
          uses: uses
          }
          };
          fs.writeFile("./data.json", JSON.stringify(data), (err) => {
          if (err) console.error(err)
          })
          })

          setSa3at.on("collect", async r => {
          if(!data[message.guild.id]) {
          await msg.delete()
          await message.channel.send(`**Expiring after \`6h\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: '21600',
          uses: '5'
          }
          } else if (data[message.guild.id].uses) {
          var uses = data[message.guild.id].uses;
                    await msg.delete()
          await message.channel.send(`**Expiring after \`6h\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: '21600',
          uses: uses
          }
          };
          fs.writeFile("./data.json", JSON.stringify(data), (err) => {
          if (err) console.error(err)
          })
          })

          etna4rSa3a.on("collect", async r => {
          if(!data[message.guild.id]) {
          await msg.delete()
          await message.channel.send(`**Expiring after \`12h\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: '43200',
          uses: '5'
          }
          } else if (data[message.guild.id].uses) {
          var uses = data[message.guild.id].uses;
                    await msg.delete()
          await message.channel.send(`**Expiring after \`12h\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: '43200',
          uses: uses
          }
          };
          fs.writeFile("./data.json", JSON.stringify(data), (err) => { //all copyrights reserved for @!Baron#0001
          if (err) console.error(err)
          })
          })

          youmWa7d.on("collect", async r => {
          if(!data[message.guild.id]) {
          await msg.delete()
          await message.channel.send(`**Expiring after \`1d\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: '86400',
          uses: '5'
          }
          } else if (data[message.guild.id].uses) {
          var uses = data[message.guild.id].uses;
                    await msg.delete()
          await message.channel.send(`**Expiring after \`1d\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: '86400',
          uses: uses
          }
          };
          fs.writeFile("./data.json", JSON.stringify(data), (err) => {
          if (err) console.error(err)
          })
          })

          mby5ls4.on("collect", async r => {
          if(!data[message.guild.id]) {
          await msg.delete()
          await message.channel.send(`**Expiring after \`Never\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: '0',
          uses: '5'
          }
          } else if (data[message.guild.id].uses) {
          var uses = data[message.guild.id].uses;
                    await msg.delete()
          await message.channel.send(`**Expiring after \`Never\`**`).then(m => m.delete({ timeout: 5000, reason: 'It had to be done.' }));
          data[message.guild.id] = {
          expire: '0',
          uses: uses
          }
          };
          fs.writeFile("./data.json", JSON.stringify(data), (err) => { //all copyrights reserved for @!Baron#0001
          if (err) console.error(err)
          })
          })
          })



  } else if(message.content.startsWith(prefix + 'linkInfo')) {

          if(!data[message.guild.id]) return message.channel.send(`**Please type first \`${prefix}linkExpire\` to put a time for the link,\nand type \`${prefix}linkUses\` to put max uses for the link.**`);
          if(!data[message.guild.id].uses) return message.channel.send(`**There is some issues in our database pls type:**\n\`${prefix}setLink-Time\` to put a time for the link,\nand type \`${prefix}setLink-Uses\` to put max uses for the link.`);
          if(!data[message.guild.id].expire) return message.channel.send(`**There is some issues in our database pls type:**\n\`${prefix}setLink-Time\` to put a time for the link,\nand type \`${prefix}setLink-Uses\` to put max uses for the link.`);
          if(data[message.guild.id].expire == "0") {
            await message.channel.send(`**Link uses: \`${data[message.guild.id].uses}\`\nExpiring after: \`Never\`**`);
          } else if (data[message.guild.id].expire !== "0") {
            await message.channel.send(`**Link uses: \`${data[message.guild.id].uses}\`\nExpiring after: \`${prettySeconds(Number (data[message.guild.id].expire))}\`**`);
          }

  } else if(message.content == "رابط") {

      if(!data[message.guild.id]) return;
      if(!data[message.guild.id].expire) return;
      if(!data[message.guild.id].uses) return;
      if(data[message.guild.id].uses && data[message.guild.id].expire) {
        if(!check[message.author.id]) {
        let invite = await message.channel.createInvite({
        maxAge: Number (data[message.guild.id].expire),
        maxUses: Number (data[message.guild.id].uses)
        }, `Requested by ${message.author.tag}`);

        if(data[message.guild.id].expire == "0") {
          try {

                await message.author.send(`**مدة الرابط\n\`Never\`\nعدد الاستخدامات\n\`${data[message.guild.id].uses}\`\n${invite} **`)
                await message.react("✅")
              check[message.author.id] = {
              lastCode: `${invite.code}`
            }


          } catch (error) {
            await message.react("❌")
            await message.reply(`**خاصك مقفول**🔐`)
          }

        } else if (data[message.guild.id].expire !== "0") {
          try {
          await message.author.send(`**مدة الرابط\n\`${prettySeconds(Number (data[message.guild.id].expire))}\`\nعدد الاستخدامات\n\`${data[message.guild.id].uses}\`\n${invite} **`)
          await message.react("✅")
               check[message.author.id] = {
              lastCode: `${invite.code}`
            }
          } catch (error) {
            await message.react("❌")
            await message.reply(`**خاصك مقفول**🔐`)
          }

          }
        fs.writeFile("./check.json", JSON.stringify(check), (err) => {
        if (err) console.error(err)
      })

    } else if(check[message.author.id]) {

      message.guild.fetchInvites().then(async i => { //all copyrights reserved for @!Baron#0001
        let invite = await message.channel.createInvite({
        maxAge: Number (data[message.guild.id].expire),
        maxUses: Number (data[message.guild.id].uses)
        }, `Requested by ${message.author.tag}`);
        let inv = i.get(check[message.author.id].lastCode);
        if(!inv) {

                  if(data[message.guild.id].expire == "0") {
          try {

                await message.author.send(`**مدة الرابط\n\`Never\`\nعدد الاستخدامات\n\`${data[message.guild.id].uses}\`\n${invite} **`)
                await message.react("✅")
              check[message.author.id] = {
              lastCode: `${invite.code}`
            }


          } catch (error) {
            await message.react("❌")
            await message.reply(`**خاصك مقفول**🔐`)
          }

        } else if (data[message.guild.id].expire !== "0") {
          try {
          await message.author.send(`**مدة الرابط\n\`${prettySeconds(Number (data[message.guild.id].expire))}\`\nعدد الاستخدامات\n\`${data[message.guild.id].uses}\`\n${invite} **`)
          await message.react("✅")
               check[message.author.id] = {
              lastCode: `${invite.code}`
            }
          } catch (error) {
            await message.react("❌")
            await message.reply(`**خاصك مقفول**🔐`)
          }

          }
        fs.writeFile("./check.json", JSON.stringify(check), (err) => {
        if (err) console.error(err)
      })

        } else if (inv) {
        if(inv.uses !== inv.maxUses || Date.now() < inv.expiresTimestamp) return message.channel.send(`**Your Last Invite Code Still Working: \`${check[message.author.id].lastCode}\`\n- Expiring after: \`${prettyMilliseconds(inv.expiresTimestamp - Date.now())}\`\n- Remaining usage: \`${inv.maxUses - inv.uses}\`**`);
        if(inv.uses == inv.maxUses || Date.now() > inv.expiresTimestamp) {

        if(data[message.guild.id].expire == "0") {
          try {

                await message.author.send(`**مدة الرابط\n\`Never\`\nعدد الاستخدامات\n\`${data[message.guild.id].uses}\`\n${invite} **`)
                await message.react("✅")
              check[message.author.id] = {
              lastCode: `${invite.code}`
            }


          } catch (error) {
            await message.react("❌")
            await message.reply(`**خاصك مقفول**🔐`)
          }

        } else if (data[message.guild.id].expire !== "0") {
          try {
          await message.author.send(`**مدة الرابط\n\`${prettySeconds(Number (data[message.guild.id].expire))}\`\nعدد الاستخدامات\n\`${data[message.guild.id].uses}\`\n${invite} **`)
          await message.react("✅")
               check[message.author.id] = { //all copyrights reserved for @!Baron#0001
              lastCode: `${invite.code}`
            }
          } catch (error) {
            await message.react("❌")
            await message.reply(`**خاصك مقفول**🔐`)
          }

          }
        fs.writeFile("./check.json", JSON.stringify(check), (err) => {
        if (err) console.error(err)
      })

        }

        }

      })



    }

      }

  } else if(message.content.startsWith(prefix + 'help')) {

    message.channel.send(`\`${prefix}linkExpire\`: **To pick the invitation expiring time**. __(ADMINISTRATION)__\n`+
                        `\`${prefix}linkUses\`: **To pick the max number of uses for the invitation**. __(ADMINISTRATION)__`)

  }

})

client.login("token-here")
