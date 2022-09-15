const File = require('../models/File')
const path = require('path')
const fs = require('fs')

const multer = require('multer')
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './public/docs/')
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = new Date(Date.now()).getFullYear()
		const ext = file.originalname.split('.').pop()
		cb(null, 'Barry_Boayes_Resume' + '_' + uniqueSuffix + '.' + ext)
	},
})
const upload = multer({ storage: storage }).single('file')

// @route   POST api/file
// @desc    Upload a file
// @access  Private
exports.uploadFile = async (req, res) => {
	try {
		let location,
			filename = ''

		await upload(req, res, function (err) {
			location = req.file.path
			filename = req.file.filename
			if (err instanceof multer.MulterError) {
				// A Multer error occurred when uploading.
				console.log('multer error', err)
			} else if (err) {
				// An unknown error occurred when uploading.
				console.log('unknown error', err)
			}
			const newFile = new File({
				filename,
				location,
			})

			console.log(newFile)
			const file = File.create(newFile)
			res.status(200).json({ msg: `${filename} has been uploaded.` })
		})
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
}

// @route   GET api/file
// @desc    Get all files
// @access  Public
exports.getFiles = async (req, res) => {
	try {
		const files = await File.find()
		res.status(200).json(files)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
}
// @route   DELETE api/file/:id
// @desc    Delete a file
// @access  Private
exports.deleteFile = async (req, res) => {
	try {
		let file = await File.findById(req.params.id)

		if (!file) return res.status(404).json({ msg: 'File not found' })

		await File.findByIdAndRemove(req.params.id)

		if (fs.existsSync(file.location)) {
			fs.unlinkSync(file.location)
		}
		res.status(200).json({ msg: 'File removed' })
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
}

// @route   GET api/file/:id
// @desc    Get a file
// @access  Public
exports.getFile = async (req, res) => {
	try {
		let file = await File.findById(req.params.id)

		if (!file) return res.status(404).json({ msg: 'File not found' })

		const filePath = path.join(__dirname, `../${file.location}`)
		res.status(200).download(filePath)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
}
