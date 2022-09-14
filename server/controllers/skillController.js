const Skill = require('../models/Skill')

// @desc    Get all skills
// @route   GET /api/skills
// @access  Public
const getSkills = async (req, res) => {
	try {
		const skills = await Skill.find()
		res.status(200).json(skills)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

// @desc    Get a skill
// @route   GET /api/skills/:id
// @access  Public
const getSkillById = async (req, res) => {
	try {
		const skill = await Skill.findById(req.params.id)
		res.json(skill)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

// @desc    Create a skill
// @route   POST /api/skills
// @access  Private/Admin
const createSkill = async (req, res) => {
	const { name, type, icon } = req.body
	try {
		const newSkill = new Skill({
			name,
			type,
			icon,
		})

		const skill = await Skill.create(newSkill)
		res.status(201).json(skill)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

// @desc    Update a skill
// @route   PUT /api/skills/:id
// @access  Private/Admin
const updateSkill = async (req, res) => {
	try {
		const { name, type, icon } = req.body

		const skill = await Skill.findById(req.params.id)

		if (skill) {
			skill.name = name
			skill.type = type
			skill.icon = icon

			const updatedSkill = await Skill.findByIdAndUpdate(
				req.params.id,
				{ $set: skill },
				{ new: true }
			)
			res.status(200).json(updatedSkill)
		} else {
			res.status(404)
			throw new Error('Skill not found')
		}
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

// @desc    Delete a skill
// @route   DELETE /api/skills/:id
// @access  Private/Admin
const deleteSkill = async (req, res) => {
	try {
		const skill = await Skill.findById(req.params.id)

		if (skill) {
			await Skill.findByIdAndRemove(req.params.id)
			res.status(200).json({ message: 'Skill removed' })
		} else {
			res.status(404)
			throw new Error('Skill not found')
		}
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

module.exports = {
	getSkills,
	getSkillById,
	createSkill,
	updateSkill,
	deleteSkill,
}
