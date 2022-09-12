const mongoose = require('mongoose')

const WelcomeSchema = mongoose.Schema({
	text: {
		type: String,
		required: true,
	},
})

module.exports = mongoose.model('Welcome', WelcomeSchema)
