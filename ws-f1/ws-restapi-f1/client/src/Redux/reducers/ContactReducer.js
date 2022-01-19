import {
    GET_CONTACT_FAIL,
    GET_CONTACT_LOAD,
    GET_CONTACT_SUCCESS,
} from "../actionTypes/types";
const initialState = {
    contacts: [],
    contact: {},
    isLoad: false,
    isError: false,
};
const ContactReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CONTACT_SUCCESS:
            return {
                ...state,
                contacts: payload.Contacts,
                isLoad: false,
                isError: false,
            };
        case GET_CONTACT_LOAD:
            return { ...state, isLoad: true, isError: false };
        case GET_CONTACT_FAIL:
            return { ...state, isLoad: false, isError: true };

        default:
            return state;
    }
};

export default ContactReducer;
