import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/operations";
import PropTypes from 'prop-types';

const ContactsListeElement = ({ contact }) => {
    const dispach = useDispatch();

    const handleClick = () => {
        dispach(deleteContact(contact.id));
    };

    return (
        <div>
            <span>{contact.name}</span>
            <span>{contact.phone}</span>
            <button type="button" onClick={handleClick}>Delete</button>
        </div>
    );
};

ContactsListeElement.propTypes = {
    contact: PropTypes.object,
};

export default ContactsListeElement;