import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    console.log('Contacts:', contacts);
    console.log('Filter:', filter);

    if (!Array.isArray(contacts)) {
      console.error('Contacts is not an array:', contacts);
      return [];
    }

    if (typeof filter !== 'string') {
      console.error('Filter is not a string:', filter);
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);