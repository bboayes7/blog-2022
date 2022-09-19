const LandingContent = require('../models/LandingContent')

// @desc    Get all landing content
// @route   GET /api/landing
// @access  Public
const getLandingContent = async (req, res) => {
    try {
        const landingContent = await LandingContent.find()
        res.status(200).json(landingContent)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

// @desc    Get landing content
// @route   GET /api/landing/:id
// @access  Public
const getLandingContentById = async (req, res) => {
    try {
        const landingContent = await LandingContent.findById(req.params.id)
        res.json(landingContent)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

// @desc    Create landing content
// @route   POST /api/landing
// @access  Private/Admin
const createLandingContent = async (req, res) => {
    const { text } = req.body
    try {
        const newLandingContent = new LandingContent({
            text,
        })

        const landingContent = await LandingContent.create(newLandingContent)
        res.status(201).json(landingContent)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

// @desc    Update landing content
// @route   PUT /api/landing/:id
// @access  Private/Admin
const updateLandingContent = async (req, res) => {
    try {
        const { text } = req.body

        const landingContent = await LandingContent.findById(req.params.id)

        if (landingContent) {
            landingContent.text = text

            const updatedLandingContent = await landingContent.save()
            res.json(updatedLandingContent)
        } else {
            res.status(404)
            throw new Error('Landing content not found')
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

// @desc    Delete landing content
// @route   DELETE /api/landing/:id
// @access  Private/Admin
const deleteLandingContent = async (req, res) => {
    try {
        const landingContent = await LandingContent.findById(req.params.id)

        if (landingContent) {
            await landingContent.remove()
            res.json({ message: 'Landing content removed' })
        } else {
            res.status(404)
            throw new Error('Landing content not found')
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
}

module.exports = {
    getLandingContent,
    getLandingContentById,
    createLandingContent,
    updateLandingContent,
    deleteLandingContent,
}
