const Contact = require("../models/contact.model"); 

const addContact = async (req, res) => {
  const { firstname, lastname, email, phone, company, jobtitle } = req.body;
  try {
    if (!firstname || !lastname || !email || !phone || !company || !jobtitle) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    const newContact = new Contact({
      firstname,
      lastname,
      email,
      phone,
      company,
      jobtitle,
    });

    const contact = await newContact.save();
    res.status(201).json({
      contact,
      msg: "Contact added successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error" });
  }
};


const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts.length) {
      return res.status(404).json({ msg: "No contacts found" });
    }
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error" });
  }
};


const updateContact = async (req, res) => {
  const { firstname, lastname, email, phone, company, jobtitle } = req.body;
  const { id } = req.params;
  try {
    if (!firstname || !lastname || !email || !phone || !company || !jobtitle) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      id,
      { firstname, lastname, email, phone, company, jobtitle },
      { new: true, runValidators: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ msg: "Contact not found" });
    }

    res.status(200).json({
      updatedContact,
      msg: "Contact updated successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error" });
  }
};


const deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      return res.status(404).json({ msg: "Contact not found" });
    }

    res.status(200).json({ msg: "Contact deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error" });
  }
};


module.exports = {
  addContact,
  getContacts,
  updateContact,
  deleteContact,
};
