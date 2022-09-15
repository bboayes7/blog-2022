const express = require('express')
const router = express.Router()
const {
	getProjects,
	getProjectById,
	deleteProject,
	createProject,
	updateProject,
} = require('../controllers/projectController')

router.get('/', getProjects)
router.post('/', createProject)

router.get('/:id', getProjectById)
router.delete('/:id', deleteProject)
router.put('/:id', updateProject)

module.exports = router