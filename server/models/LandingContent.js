const mongoose = require('mongoose')

const LandingContentSchema = mongoose.Schema({
	text: {
		type: String,
		required: true,
	},
})

module.exports = mongoose.model('LandingContent', LandingContentSchema)
