const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('get all contacts') 
})

router.post('/', (req, res) => {
    res.send('create a contact') 
})

router.get('/:id', (req, res) => {
    res.send(`get contact of ${req.params.id}`) 
})

router.put('/:id', (req, res) => {
    res.send(`update contact of ${req.params.id}`) 
})

router.delete('/:id', (req, res) => {
    res.send(`delete contact of ${req.params.id}`) 
})

module.exports = router