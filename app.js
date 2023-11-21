const express = require('express')
const errorHandler = require('./middlewares/errorHandler')

const contactRoutes = require('./routes/contactRoutes')
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.use('/api/contacts', contactRoutes)
app.use(errorHandler)


app.listen(PORT, (req, res) => {
    console.log(`server started at port: ${PORT}`)
})