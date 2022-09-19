const express = require('express')
const router = express.Router()

const {
	getExperiences,
	getExperienceById,
	createExperience,
	updateExperience,
	deleteExperience,
} = require('../controllers/experienceController')

router.get('/', getExperiences)
router.get('/:id', getExperienceById)
router.post('/', createExperience)
router.put('/:id', updateExperience)
router.delete('/:id', deleteExperience)

module.exports = router
