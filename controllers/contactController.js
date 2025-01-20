//@desc Get All Contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Create New Contacts
//@route POST /api/contacts
//@access Public
const createContact = (req, res) => {
  console.log("The request body is: ", req.body);
  const { name, email, phone } = req.body;
  if(!name || !email || !phone){
    res.status(404);
    throw new Error("All fields are mandatory !");
  } 
  res.status(200).json({ message: "Create contacts" });
};

//@desc Get  Contacts
//@route GET /api/contacts
//@access Public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get contacts for ${req.params.id}` });
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
