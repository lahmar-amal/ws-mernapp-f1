const express = require("express");
const {
    addContact,
    getAllContacts,
    getOneContact,
    updateContact,
    deleteContact,
} = require("../controllers/contact.controllers");
const router = express.Router();

router.post("/add", addContact);
router.get("/contacts", getAllContacts);
router.get("/oneContact/:id", getOneContact);
router.put("/editContact/:id", updateContact);
router.delete("/deleteContact/:id", deleteContact);

module.exports = router;
