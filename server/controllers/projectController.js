const Project = require('../models/Project.js')

const multer = require('multer')
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './public/img/')
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	},
})

const upload = multer({ storage: storage }).array('screenshots', 5)

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getProjects = async (req, res) => {
	try {
		const projects = await Project.find()
		res.status(200).json(projects)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

// @desc    Get single project
// @route   GET /api/projects/:id
// @access  Public
const getProjectById = async (req, res) => {
	try {
		const project = await Project.findById(req.params.id)

		if (project) {
			res.json(project)
		} else {
			res.status(404)
			throw new Error('Project not found')
		}
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private/Admin
const deleteProject = async (req, res) => {
	try {
		const project = await Project.findById(req.params.id)

		if (project) {
			await project.remove()
			res.json({ message: 'Project removed' })
		} else {
			res.status(404)
			throw new Error('Project not found')
		}
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

// @desc    Create a project
// @route   POST /api/projects
// @access  Private/Admin
const createProject = async (req, res) => {
	try {
		// const project = new Project({
		// 	name: 'Memory Game',
		// 	description:
		// 		"Simple Memory Game used with Udacity's Starter Code. The project was to test how effectively I can use HTML, CSS, and JavaScript in one project. The biggest thing I learned was how to use the DOM with eventlisteners more effectively, how to use setInterval, and how to manipulate the CSS when an event occurs.",
		// 	screenshots: [''],
		// 	technologies: ['HTML', 'CSS', 'JavaScript'],
		// 	link: 'https://kaseybarry.day',
		// 	github: 'https://github.com/bboayes7/memory-game',
		// })

		// const project = new Project({
		//     name: req.body.name,
		//     description: req.body.description,
		//     technologies: req.body.technologies,
		//     link: req.body.link,
		//     github: req.body.github,
		// })
		await upload(req, res, function (err) {
			const screenshots = req.files.map((file) => file.filename)
			const project = new Project({
				name: req.body.name,
				description: req.body.description,
				screenshots: screenshots,
				technologies: req.body.technologies,
				link: req.body.link,
				github: req.body.github,
			})

			Project.create(project)
			res.status(200).json(project)
			if (err instanceof multer.MulterError) {
				// A Multer error occurred when uploading.
				console.log('multer error', err)
			} else if (err) {
				// An unknown error occurred when uploading.
				console.log('unknown error', err)
			}
		})
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private/Admin
const updateProject = async (req, res) => {
	try {
		const { name, description, screenshots, technologies, link, github } =
			req.body

		const project = await Project.findById(req.params.id)

		if (project) {
			project.name = name
			project.description = description
			project.screenshots = screenshots
			project.technologies = technologies
			project.link = link
			project.github = github
			const updatedProject = await Project.findByIdAndUpdate(
				req.params.id,
				{ $set: project },
				{ new: true }
			)
			res.json(updatedProject)
		} else {
			res.status(404)
			throw new Error('Project not found')
		}
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

module.exports = {
	getProjects,
	getProjectById,
	deleteProject,
	createProject,
	updateProject,
}
