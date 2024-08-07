#cmd install ai.js module.exports = {
	config: {
		name: "ai",
		aliases: ["ai"],
		version: "1.0",
		author: "ʬɸʬ Sønïč Shïsûį ʬɸʬ", // do not change this credits
		countDown: 5,
		role: 0,
		shortDescription: "send you pic of fleetway super Sonic ",
		longDescription: "send you pic of fleetway super Sonic",
		category: "no prefix",
		guide: "{pn}"
	},

	onStart: async function ({ message }) {
	 var link = [ 
"https://i.ibb.co/6XMQ7rs/image.jpg",
  ]
let img = link[Math.floor(Math.random()*link.length)]
message.send({
  body: "𝐨𝐧 𝐝𝐢𝐭 𝐩𝐚𝐬 𝐚𝐢 𝐚𝐛𝐫𝐮𝐭𝐢𝐬 ",attachment: await global.utils.getStreamFromURL(img)
})
}
}
