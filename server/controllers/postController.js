const Post = require('../models/Post')

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
exports.getPosts = async (req, res) => {
	try {
		const posts = await Post.find()
		res.status(200).json(posts)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
}

// @route   POST api/posts
// @desc    Create a post
// @access  Private
exports.createPost = async (req, res) => {
	const { title, body } = req.body

	try {
		const newPost = new Post({
			title,
			body,
		})

		const post = await Post.create(newPost)
		res.status(200).json(post)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
}

// @route   PUT api/posts/:id
// @desc    Update a post
// @access  Private
exports.updatePost = async (req, res) => {
	const { title, body } = req.body

	// Build post object
	const postFields = {}
	if (title) postFields.title = title
	if (body) postFields.body = body

	try {
		let post = await Post.findById(req.params.id)

		if (!post) return res.status(404).json({ msg: 'Post not found' })

		post = await Post.findByIdAndUpdate(
			req.params.id,
			{ $set: postFields },
			{ new: true }
		)

		res.status(200).json(post)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
}

// @route   DELETE api/posts/:id
// @desc    Delete a post
// @access  Private
exports.deletePost = async (req, res) => {
	try {
		let post = await Post.findById(req.params.id)

		if (!post) return res.status(404).json({ msg: 'Post not found' })

		await Post.findByIdAndRemove(req.params.id)

		res.status(200).json({ msg: 'Post removed' })
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
}

// @route   GET api/posts/:id
// @desc    Get post by ID
// @access  Public
exports.getPostById = async (req, res) => {
	try {
		let post = await Post.findById(req.params.id)

		if (!post) return res.status(404).json({ msg: 'Post not found' })

		res.status(200).json(post)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
}
