const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const cron = require('cron');
// Cabral va saluta 

client.on('message', async message => {
	if (message.content === 'cabral ping') {
		//send the message to the channel
		message.channel.send("Pinging....").then((msg) => {
			msg.edit(`Pong! **5** ms :ping_pong: `);
		});
	}
});
client.on('message', async message => {
	if (message.content === 'cabral invite') {
		//send the message to the channel
		message.channel.send("Loading...").then((msg) => {
			msg.edit(`https://discordapp.com/oauth2/authorize?&client_id=757884193123336205&scope=bot`);
		});
	}
});
client.on('message', async message => {
	if (message.author.id == `384310398737973250`) {
		if (message.content === 'cabral server count') {

			message.channel.send("**Checking if you're my developer :tools: **").then((message) => {
setTimeout(function () {
				var scout = client.guilds.cache.size
				message.edit(`I am on ${scout} servers!`);
}, 3000)

			});
			}
	}
	if (message.author.id != `384310398737973250`) {
		if (message.content === 'cabral server count') {

			message.channel.send("**Checking if you're my developer :tools: **").then((message) => {
setTimeout(function () {
				var scout = client.guilds.cache.size
				message.edit(`Sorry! You are not my developer!`);
}, 3000)

			});
		}
	}






});
require('events').EventEmitter.defaultMaxListeners = 30
client.on('ready', () => {
  client.user.setActivity(`Ce spun romanii?`, { type: 'STREAMING', url: `https://www.youtube.com/watch?v=hhfaAVJ2aFw`});
	console.log("Ready :)")
	});

client.on('message', message => {
	if (!message.content.startsWith(config.prefix)) return;

	const withoutPrefix = message.content.slice(config.prefix.length);
	const split = withoutPrefix.split(/ +/);
	const command = split[0];
	const args = split.slice(1);
	function getUserFromMention(mention) {
		if (!mention) return;

		if (mention.startsWith('<@') && mention.endsWith('>')) {
			mention = mention.slice(2, -1);

			if (mention.startsWith('!')) {
				mention = mention.slice(1);
			}

			return client.users.cache.get(mention);
		}
	}
	if (command === 'hack') { // "hack command"
		if (args[0]) {
			const user = getUserFromMention(args[0]);
			if (!user) {
				return message.reply('Please use a proper mention!');
			}

			return message.channel.send(`Getting ${user.username}'s info >:)`)
			.then((msg) => {
				setTimeout(function () {
					setTimeout(function () {
						setTimeout(function () {
							setTimeout(function () {
								setTimeout(function () {
									msg.edit(`**Ultra dangerous hack complete**`);
								}, 3000)
								msg.edit(`${user.username}'s minecraft password: **poop123**`);
							}, 3000)
							msg.edit(`Worth it? **not at all**`);
						}, 3000)
						msg.edit(`${user.username}'s bank account ballance: $5 :(`);
					}, 3000)
					msg.edit(`Spotify playlist: https://open.spotify.com/playlist/05vFlMiP5DGbW9fizefWK4?si=eK8ADStsThG1j807CgTWOQ`); //replace with anything :D
				}, 3000)
			});
		}
	}
	else if (command === 'avatar') {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
		});

		// send the entire array of strings as a message
		// by default, discord.js will `.join()` the array with `\n`
		message.channel.send(avatarList);
	}
});
client.on('message', message => {
	if (!message.content.startsWith(config.prefix)) return;

	const withoutPrefix = message.content.slice(config.prefix.length);
	const split = withoutPrefix.split(/ +/);
	const command = split[0];
	const args = split.slice(1);
	function getUserFromMention(mention) {
		if (!mention) return;

		if (mention.startsWith('<@') && mention.endsWith('>')) {
			mention = mention.slice(2, -1);

			if (mention.startsWith('!')) {
				mention = mention.slice(1);
			}

			return client.users.cache.get(mention);
		}
	}
	if (command === 'salute') {
		if (args[0]) {
			const user = getUserFromMention(args[0]);
			if (!user) {
				return message.reply('Please use a proper mention!');
			}
			var cabrals = ["**Ce mai faci frate?**", "**Cum mai esti?**", "**BA NU POT RASPUNDE CA-S LIVE >:(** ", "**lmao ba cf**", "idk"];
			var cabral = Math.floor(Math.random() * cabrals.length);
			return message.channel.send(`Hopaa saluut ${user.username} :)`)
				.then((msg) => {
					setTimeout(function () {
						msg.edit(cabrals[cabral]);
					}, 3000)
				});
		}
	}
});



// Create an event listener for messages
client.on('message', async message => {
	var facts = ["esti prost?", "nu mai am idei", "de ce 100? :confused: ", "EEEEEEE >:(", "NU STIU", "https://cdn.discordapp.com/avatars/754330587627782214/10a0a2704a168f978929298f7df7cb42.png?size=128"];
var fact = Math.floor(Math.random() * facts.length);
  // If the message is "cabral am intrebat 100 de romani"
  if (message.content === 'cabral am intrebat 100 de romani') {
    // Send a response to the same channel, then react
  const reactmessage = await message.channel.send(facts[fact]);
		await reactmessage.react('👌');
  }
});
client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;
	var songs = ['Ionut Cercel - Made in Romania - manele vechi.mp3', 'The Origin of Coochie Man..mp3', 'AlbertNBN - M6 ft. MGK666 (Official Music Video).mp3', 'Geany Morandi - Fac bani si in Himalaya [oficial video] 2016 (1).mp3' ];
	var song = Math.floor(Math.random() * songs.length);
  if (message.content === 'cabral baga muzica') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
		connection.play(songs[song]);
    } else {
      message.reply("Baaaa chiar asa ma, tre' sa fii intr un vc ce naiba");
    }
  }
});
client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;
	var songs = ['Ionut Cercel - Made in Romania - manele vechi.mp3', 'The Origin of Coochie Man..mp3', 'AlbertNBN - M6 ft. MGK666 (Official Music Video).mp3', 'Geany Morandi - Fac bani si in Himalaya [oficial video] 2016 (1).mp3' ];
	var song = Math.floor(Math.random() * songs.length);
  if (message.content === 'cabral baia maree') {
		message.delete();
message.channel.send("**Hai afara sa fumam o tigara :smoking: **")
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
		connection.play(`Ian x Azteca - HAI AFARA (music video).mp3`);
    } else {
      message.reply("Baaaa chiar asa ma, tre' sa fii intr un vc ce naiba");
    }
  }
});

client.on('message', async message => {
	// Voice only works in guilds, if the message does not come from a guild,
	// we ignore it
	if (!message.guild) return;
	if (message.content === 'cabral baga m6') {
		// Only try to join the sender's voice channel if they are in one themselves
		if (message.member.voice.channel) {
			const connection = await message.member.voice.channel.join();
			connection.play('AlbertNBN - M6 ft. MGK666 (Official Music Video).mp3');
		} else {
			message.reply("Baaaa chiar asa ma, tre' sa fii intr un vc ce naiba");
		}
	}
});
client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === 'cabral stop') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.leave();
    } else {
      message.reply("Baaaa chiar asa ma, tre' sa fii intr un vc ce naiba");
    }
  }
});
client.on('message', async message => {
	var facts = ["777 OPAA CASTIGATORR :confetti_ball: ", "Necastigator, mai incearca! :confused: ", "Pfaaa, nu cred ca mai ai bani :("];
var fact = Math.floor(Math.random() * facts.length);
  if (message.content === 'cabral baga la cazino') {
  const reactmessage = await message.channel.send(facts[fact]);
		await reactmessage.react('🎊');
  }
});
client.on('message', async message => {
  if (message.content === 'cabral help') {
		const embed = {
		  "title": "Ok deci",
		  "description": "Sunt un bot creat de [Cristi](https://www.instagram.com/___criistii/?hl=en) cu absolut niciun scop :)))), aici sunt comenzile:",
		  "color": 15158332,
		  "image": {
		    "url": "https://cdn.discordapp.com/avatars/757884193123336205/9d16012ca4551bc31c2d14675232e147.png?size=128"
		  },
		  "fields": [
		    {
		      "name": "🤔",
		      "value": "pls who r u"
		    },
		    {
		      "name": "🌟",
		      "value": "cabral baga la cazino"
		    },
		    {
		      "name": "🎵",
		      "value": "cabral baga muzica"
		    },
		    {
		      "name": " 🤷‍",
		      "value": "cabral am intrebat 100 de romani"
		    },
		    {
		      "name": "😳",
		      "value": "cabral help"
			  },
			  {
				  "name": "😎",
				  "value": "cabral hack <user>"

			  },
			  {
				  "name": "🤔",
				  "value": "cabral invite"

			  },
			  {
				  "name": "👌",
				  "value": "cabral salute <user>"

			  }
		  ]
		};
		message.channel.send({ embed });
  }
});
client.on('message', async message => {
	if (message.content === 'cabral help dev') {
		const embed = {
			"title": "Developer Commands: ",
			"description": "The commands for my developers : ) ",
			"color": 3066993,
			"footer": {
				"icon_url": "https://cdn.discordapp.com/avatars/384310398737973250/a_a98c31189ff1c7f432ff610d246b93bb.gif?size=128",
				"text": "©℗ 2017-2020 Cristi. All rights Reserved."
			},
			"thumbnail": {
				"url": "https://www.click.ro/sites/default/files/medias/2019/01/18/cabral.jpg"
			},
			"fields": [
				{
					"name": "⚙",
					"value": "cabral server count",
					"inline": true
				},
				{
					"name": "⚙",
					"value": "cabral ping",
					"inline": true
				},
				{
					"name": "⚙",
					"value": "cabral invite",
					"inline": true
				}

			]
		};
		message.channel.send({ embed });
	}
});
client.on('message', async message => {
  if (message.content === 'cabral cine esti') {
	  const reactmessage = await message.channel.send("Sunt un bot cretin creat de nimeni altul decat <@384310398737973250> ");
		await reactmessage.react('😎');
  }
});
client.login(config.token); // tip: change the token in the config
