import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoading } from '../redux/selectors';
import ContactsListeElement from './contactsListElement';

const ContactList = () => {
    const items = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectIsLoading);

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


    
