//@desc Get All Contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create New Contacts
//@route POST /api/contacts
//@access Public
const createContacts = (req, res) => {
  res.status(200).json({ message: "Create contacts" });
};

//@desc Get  Contacts
//@route GET /api/contacts
//@access Public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get contacts for ${req.params.id}` });
};

//@desc Create New Contacts
//@route GET /api/contacts
//@access Public
const createContact = (req, res) => {
  res.status(200).json({ message: "Create contacts" });
};

//@desc update Contact
//@route PUT /api/contacts
//@access Public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contacts for ${req.params.id}` });
};

//@desc Delete Contact
//@route DELETE /api/contacts
//@access Public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contacts for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
