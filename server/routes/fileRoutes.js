const express = require('express')
const router = express.Router()
const {
	getFiles,
	uploadFile,
	deleteFile,
	getFile,
	downloadFile,
} = require('../controllers/fileController')


router.get('/', getFiles)
router.get('/:id', getFile)
router.get('/download/:id', downloadFile)

router.post('/', uploadFile)
router.delete('/:id', deleteFile)

module.exports = router
