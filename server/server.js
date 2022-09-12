const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./config/db')
const cors = require('cors')
const app = express()

connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/post', require('./routes/postRoutes'))
app.use('/api/file', require('./routes/fileRoutes'))

app.listen(port, () => console.log(`Server running on port ${port}`))
