import {
    GET_CONTACT_FAIL,
    GET_CONTACT_LOAD,
    GET_CONTACT_SUCCESS,
    GET_ONE_CONTACT,
} from "../actionTypes/types";
import axios from "axios";
// get all contacts
export const getAllContacts = () => async (dispatch) => {
    dispatch({ type: GET_CONTACT_LOAD });
    try {
        let res = await axios.get(
            "http://localhost:5000/api/contactlist/contacts"
        );
        dispatch({ type: GET_CONTACT_SUCCESS, payload: res.data });
        // res.data : { message , Contacts}
    } catch (err) {
        dispatch({ type: GET_CONTACT_FAIL, err });
    }
};

export const addContact = (newContact) => async (dispatch) => {
    try {
        await axios.post(
            "http://localhost:5000/api/contactlist/add",
            newContact
        );
        dispatch(getAllContacts());
        console.log("add");
    } catch (err) {
        dispatch({ type: GET_CONTACT_FAIL });
    }
};
export const getOneContact = (id) => async (dispatch) => {
    dispatch({ type: GET_CONTACT_LOAD });
    try {
        let res = await axios.get(
            `http://localhost:5000/api/contactlist/oneContact/${id}`
        );
        dispatch({ type: GET_ONE_CONTACT, payload: res.data });
    } catch (err) {
        dispatch({ type: GET_CONTACT_FAIL, err });
    }
};

export const updateContact = (id, contact) => async (dispatch) => {
    dispatch({ type: GET_CONTACT_LOAD });
    try {
        await axios.put(
            `http://localhost:5000/api/contactlist/editContact/${id}`,
            contact
        );
        dispatch(getAllContacts());
    } catch (err) {
        dispatch({ type: GET_CONTACT_FAIL, err });
    }
};

export const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(
            `http://localhost:5000/api/contactlist/deleteContact/${id}`
        );
        dispatch(getAllContacts());
    } catch (err) {
        dispatch({ type: GET_CONTACT_FAIL, err });
    }
};
