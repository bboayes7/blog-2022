const File = require('../models/File')
const fs = require('fs')
const path = require('path')
const multer  = require('multer')
const upload = multer({ dest: '../public/docs' })


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

// @route   POST api/file
// @desc    Upload a file
// @access  Private
exports.uploadFile = async (req, res) => {
    const { title, location } = req.body

    try {
        const newFile = new File({
            title,
            location,
        })

        const file = await File.create(newFile)
        res.status(200).json(file)
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

        res.status(200).json(file)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
}

// @route   GET api/file/download/:id
// @desc    Download a file
// @access  Public
exports.downloadFile = async (req, res) => {
    try {
        let file = await File.findById(req.params.id)

        if (!file) return res.status(404).json({ msg: 'File not found' })

        const filePath = path.join(__dirname, `../${file.location}`)
        res.download(filePath)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
}



