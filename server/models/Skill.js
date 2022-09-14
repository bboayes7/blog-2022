const mongoose = require('mongoose')

const SkillSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
	},
})

module.exports = mongoose.model('Skill', SkillSchema)
