const mongoose = require('mongoose')

const FileSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
})

module.exports = mongoose.model('File', FileSchema)
