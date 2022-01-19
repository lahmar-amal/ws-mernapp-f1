const Contact = require("../model/Contact");

// add contact
exports.addContact = async (req, res) => {
    try {
        const findContact = await Contact.findOne({ email: req.body.email });
        if (findContact) {
            return res
                .status(400)
                .send({ messgae: "this email is already used" });
        }
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(200).send({ message: " new contact added", newContact });
    } catch (err) {
        res.status(500).send(err);
    }
};

// get all contacts
exports.getAllContacts = async (req, res) => {
    try {
        const Contacts = await Contact.find();
        res.status(200).send({ message: "all contacts ", Contacts });
    } catch (err) {
        res.status(500).send(err);
    }
};

// get one contact by id
exports.getOneContact = async (req, res) => {
    try {
        const oneContact = await Contact.findById(req.params.id);
        res.status(200).send({ message: "one contact by id", oneContact });
    } catch (err) {
        res.status(500).send(err);
    }
};

// update one contact
exports.updateContact = async (req, res) => {
    try {
        const editContact = await Contact.updateOne(
            { _id: req.params.id },
            { $set: { ...req.body } }
        );
        res.status(200).send({
            message: "here's the updated contact ",
            editContact,
        });
    } catch (err) {
        res.status(500).send(err);
    }
};

// delete contact
exports.deleteContact = async (req, res) => {
    try {
        await Contact.deleteOne({ _id: req.params.id });
        res.status(200).send({ message: "contact deleted succ" });
    } catch (err) {
        res.status(500).send(err);
    }
};
