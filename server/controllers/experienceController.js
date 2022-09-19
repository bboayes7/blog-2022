const Experience = require('../models/Experience')

//@desc Get all experiences
//@route GET /api/experiences
//@access Public
const getExperiences = async (req, res) => {
	try {
		const experiences = await Experience.find()
		res.status(200).json(experiences)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

//@desc Get an experience
//@route GET /api/experiences/:id
//@access Public
const getExperienceById = async (req, res) => {
	try {
		const experience = await Experience.findById(req.params.id)
		res.json(experience)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

//@desc Create an experience
//@route POST /api/experiences
//@access Private/Admin
const createExperience = async (req, res) => {
	const { title, company, location, from, to, description } = req.body
	try {
		const newExperience = new Experience({
			title,
			company,
			location,
			from,
			to,
			current,
			description,
		})

		const experience = await Experience.create(newExperience)
		res.status(201).json(experience)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

//@desc Update an experience
//@route PUT /api/experiences/:id
//@access Private/Admin
const updateExperience = async (req, res) => {
	try {
		const { title, company, location, from, to, description } = req.body

		const experience = await Experience.findById(req.params.id)

		if (experience) {
			experience.title = title
			experience.company = company
			experience.location = location
			experience.from = from
			experience.to = to
			experience.description = description

			const updatedExperience = await Experience.findByIdAndUpdate(
				req.params.id,
				experience,
				{ new: true }
			)

			res.status(200).json(updatedExperience)
		} else {
			res.status(404)
			throw new Error('Experience not found')
		}
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

//@desc Delete an experience
//@route DELETE /api/experiences/:id
//@access Private/Admin
const deleteExperience = async (req, res) => {
	try {
		const experience = await Experience.findById(req.params.id)

		if (experience) {
			await experience.remove()
			res.status(200).json({ message: 'Experience removed' })
		} else {
			res.status(404)
			throw new Error('Experience not found')
		}
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

module.exports = {
	getExperiences,
	getExperienceById,
	createExperience,
	updateExperience,
	deleteExperience,
}
