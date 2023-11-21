const express = require('express')

const PORT = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
    res.send('contacts app')
})

app.listen(PORT, (req, res) => {
    console.log(`server started at port: ${PORT}`)
})