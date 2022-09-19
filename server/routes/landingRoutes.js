const express = require('express')
const router = express.Router()

const {
	getLandingContent,
	getLandingContentById,
	createLandingContent,
	updateLandingContent,
	deleteLandingContent,
} = require('../controllers/landingController')

router.get('/', getLandingContent)
router.get('/:id', getLandingContentById)
router.post('/', createLandingContent)
router.put('/:id', updateLandingContent)
router.delete('/:id', deleteLandingContent)
