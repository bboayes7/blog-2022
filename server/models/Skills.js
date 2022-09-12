const mongoose = require('mongoose')

const SkillSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
	},
})

module.exports = mongoose.model('Skill', SkillSchema)
