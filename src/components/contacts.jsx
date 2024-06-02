import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContats, selectisLoading } from '../redux/selectors';
import ContactsListeElement from './contactsListElement';

const ContactList = () => {
    const items = useSelector(selectFilteredContats);
    const isLoading = useSelector(selectisLoading);

    return (
        <div>
            <h4>You have {items.length}contact{items.length === 1 ? null : 's'}</h4>
              <ul >
        {!!isLoading && <b>Loading contacts...</b>}
        {!!items &&
          items.map(contact => (
            <li key={contact.id}>
              <ContactsListeElement contact={contact} />
            </li>
          ))}
      </ul>
        </div>
    )
}

export default ContactList;


    
