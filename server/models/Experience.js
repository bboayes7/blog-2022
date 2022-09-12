const mongoose = require('mongoose')

const ExperienceSchema = mongoose.Schema({
	company: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	start: {
		type: Date,
		required: true,
	},
	end: {
		type: Date,
	},
	description: {
		type: String,
		required: true,
	},
})

module.exports = mongoose.model('Experience', ExperienceSchema)
