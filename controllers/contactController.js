const Contact = require('../models/contactModel')
const mongoose = require('mongoose')
const objectId = mongoose.Types.ObjectId


// @desc Get all contacts
// @route /api/contacts
// @access public
const getAllContacts =  async (req, res, next) => {
    try {
        const contacts = await Contact.find()
        res.send(contacts)
    } catch(err) {
        next(err)
    }
}


// @desc Get a contact
// @route /api/contacts/:id
// @access public
const getContact = async (req, res, next) => {
    try {
        const contactID = req.params.id

        // check whether a valid mongoose id or not
        if (!objectId.isValid(contactID)) {
            res.status(400)
            throw new Error('Invalid contact Id.')
        }

        const contact = await Contact.findById(contactID)
        
        if (!contact) {
            res.status(404)
            throw new Error(`No Contact found with id: ${contactID }`)
        }
        res.status(200).json(contact)
    } catch (err) {
        next(err)
    }
}


// @desc Create a contact
// @route /api/contacts
// @access public
const createContact =  async (req, res, next) => {
    try {
        const { name, email, phone } = req.body

        if (!name || !email || !phone) {
            res.status(400)
            throw new Error('All fiels are required')
        }

        const contact = new Contact({
            name,
            email,
            phone
        })
        contact.save()
        res.status(200).json(contact)
    } catch (err) {
        next(err)
    }
}


// @desc Update a contact
// @route /api/contacts/:id
// @access public
const updateContact = async (req, res, next) => {
    try {
        const contactID = req.params.id
        console.log(contactID)

        if (!objectId.isValid(contactID)) {
            res.status(400)
            throw new Error('Invalid contact Id.')
        }

        const updatedContact = await Contact.findOneAndUpdate(
            {_id: contactID},
            req.body,
            { new: true }
        )

        if (!updatedContact) {
            res.status(404)
            throw new Error(`No Contact found with id: ${contactID}`)
        }
        res.status(200).json(updatedContact)
    } catch (err) {
        next(err)
    }
}

// @desc Delete a contact
// @route /api/contacts/:id
// @access public 
const deleteContact = async (req, res) => {
    res.send(`delete contact of ${req.params.id}`)
}

module.exports = {
    getAllContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}