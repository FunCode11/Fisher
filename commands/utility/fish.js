const { SlashCommandBuilder } = require('discord.js');
const math = require('mathjs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fish')
		.setDescription('Fishes!'),
	async execute(interaction) {
		await interaction.reply("You fished " + math.floor(math.random(0, 2183)) + " fishes!");
	},
};
