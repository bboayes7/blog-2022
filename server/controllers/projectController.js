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
			console.log('hi from upload', screenshots)
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
// @route   PUT /api/project/:id
// @access  Private/Admin
const updateProject = async (req, res) => {
	try {
		let project = await Project.findById(req.params.id)
		await upload(req, res, function (err) {
			if (project) {
				const screenshots = req.files.map((file) => file.filename)
				console.log('hi from upload', req.params.id)
				project = {
					name: req.body.name,
					description: req.body.description,
					screenshots: screenshots,
					technologies: req.body.technologies,
					link: req.body.link,
					github: req.body.github,
				}
				console.log('newproject', project)
				const updatedProject = updateProjectToMongo(project, req.params.id)
				res.status(200).json(updatedProject)
				if (err instanceof multer.MulterError) {
					// A Multer error occurred when uploading.
					console.log('multer error', err)
				} else if (err) {
					// An unknown error occurred when uploading.
					console.log('unknown error', err)
				}
			} else {
				res.status(404)
				throw new Error('Project not found')
			}
		})
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: 'Server Error' })
	}
}

const updateProjectToMongo = async (project, id) => {
	try {
		const updatedProject = await Project.findByIdAndUpdate(
			id,
			project,
			{
				new: true,
				runValidators: true,
			}
		)
		return updatedProject
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

// try {

// 	await upload(req, res, function (err) {
// 	const project =  Project.findById(req.params.id)

// 	if (project) {
// 		const screenshots = req.files.map((file) => file.filename)
// 		console.log('hi from upload', screenshots)
// 		const newproject = new Project({
// 			name: req.body.name,
// 			description: req.body.description,
// 			screenshots: screenshots,
// 			technologies: req.body.technologies,
// 			link: req.body.link,
// 			github: req.body.github,
// 		})
// 		const updatedProject = Project.findByIdAndUpdate(
// 			req.params.id,
// 			{ $set: newProject },
// 			{ new: true }
// 			)
// 		res.status(200).json(updatedProject)
// 		if (err instanceof multer.MulterError) {
// 			// A Multer error occurred when uploading.
// 			console.log('multer error', err)
// 		} else if (err) {
// 			// An unknown error occurred when uploading.
// 			console.log('unknown error', err)
// 		}
// 	} else {
// 		res.status(404)
// 		throw new Error('Project not found')
// 		}

// 	})
// } catch (error) {
// 	console.error(error)
// 	res.status(500).json({ message: 'Server Error' })
// }
