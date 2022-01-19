import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../Redux/actions/contact";
import ContactCard from "./ContactCard";
const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.ContactReducer.contacts);
    const load = useSelector((state) => state.ContactReducer.isLoad);
    useEffect(() => {
        dispatch(getAllContacts());
    }, [dispatch]);

    return (
        <div>
            {load ? (
                <h1>Loading ...</h1>
            ) : (
                contacts.map((el) => <ContactCard contact={el} />)
            )}
        </div>
    );
};

export default ContactList;
