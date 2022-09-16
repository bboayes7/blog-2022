const mongoose = require('mongoose')
const ProjectSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	screenshots: {
		type: [String],
		required: true,
	},
	technologies: {
		type: [String],
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
	github: {
		type: String,
		required: true,
	}
})

module.exports = mongoose.model('Project', ProjectSchema)
