const express = require('express');
const router = express.Router();
const { addContact, getContacts, updateContact, deleteContact } = require('../controllers/contacts');

router.post('/contacts', addContact); 
router.get('/contacts', getContacts);       
router.put('/contacts/:id', updateContact);    
router.delete('/contacts/:id', deleteContact); 

module.exports = router;
