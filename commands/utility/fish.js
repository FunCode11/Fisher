const { SlashCommandBuilder } = require('discord.js');
const math = require('mathjs');
const fishes = ["tuna", "sardine", "hering", "catfish", "krill", "tilapia", "carp"]
module.exports = {
	data: new SlashCommandBuilder()
		.setName('fish')
		.setDescription('Fishes!'),
	async execute(interaction) {
		await interaction.reply("You fished a " + fishes[math.randomInt(6)] + "!");
	},
};
