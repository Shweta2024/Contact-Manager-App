const express = require('express')
const mongoose = require('mongoose')
const errorHandler = require('./middlewares/errorHandler')
require('dotenv').config()

const contactRoutes = require('./routes/contactRoutes')
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
mongoose.connect(process.env.DB_CONNECTION_STRING)

app.use('/api/contacts', contactRoutes)
app.use(errorHandler)


app.listen(PORT, (req, res) => {
    console.log(`server started at port: ${PORT}`)
})