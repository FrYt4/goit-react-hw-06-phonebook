import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoading, selectError } from '../redux/selectors';
import { fetchContats } from '../redux/operations';
import ContactForm from './contactForm';
import ContactList from './contacts';
import { Filter } from './filter';



export const App = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)

    useEffect(() => {
        dispatch(fetchContats());
    }, [dispatch]);
   
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
            {!!isLoading &&!error && <b>Request in progress... </b>}
        </div>
    );
};