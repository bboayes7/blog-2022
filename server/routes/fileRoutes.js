const express = require('express')
const router = express.Router()


const {
	getFiles,
	uploadFile,
	deleteFile,
	getFile,
} = require('../controllers/fileController')



router.get('/', getFiles)
router.get('/:id', getFile)

router.post('/', uploadFile)
router.delete('/:id', deleteFile)

module.exports = router
