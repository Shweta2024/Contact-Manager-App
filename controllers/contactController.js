// controllers -> contains all logic of req & res and dp operations


// @desc Get all contacts
// @route /api/contacts
// @access public
const getAllContacts = (req, res) => {
    res.send('get all contacts')
}


// @desc Get a contact
// @route /api/contacts/:id
// @access public
const getContact = (req, res) => {
    res.send(`get contact of ${req.params.id}`)
}


// @desc Create a contact
// @route /api/contacts
// @access public
const createContact = (req, res) => {
    res.send('create a contact')
}



// @desc Update a contact
// @route /api/contacts/:id
// @access public
const updateContact = (req, res) => {
    res.send(`update contact of ${req.params.id}`)
}

// @desc Delete a contact
// @route /api/contacts/:id
// @access public 
const deleteContact = (req, res) => {
    res.send(`delete contact of ${req.params.id}`)
}

module.exports = {
    getAllContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
}