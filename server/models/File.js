const mongoose = require('mongoose')

const FileSchema = mongoose.Schema({
	filename: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
})

module.exports = mongoose.model('File', FileSchema)
