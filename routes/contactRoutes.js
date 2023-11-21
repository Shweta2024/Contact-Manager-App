const router = require('express').Router()
const { 
    getAllContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
} = require('../controllers/contactController')

router.get('/', getAllContacts)

router.post('/', createContact)

router.get('/:id', getContact)

router.put('/:id', updateContact)

router.delete('/:id', deleteContact)

module.exports = router