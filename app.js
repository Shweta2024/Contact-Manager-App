const express = require('express')

const contactRoutes = require('./routes/contactRoutes')
const PORT = process.env.PORT || 5000

const app = express()

app.use('/api/contacts',contactRoutes)


app.listen(PORT, (req, res) => {
    console.log(`server started at port: ${PORT}`)
})