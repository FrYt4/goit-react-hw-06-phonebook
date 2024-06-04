
import { ContactForm } from "./contactForm";
import { ContactList } from "./contacts";
import { Filter } from "./filter";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]
  )

  return (
    <div>
      <h1 >Phonebook</h1>
      <ContactForm />
      <h2 >Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Loading...</b>}
      {error&&<h1>Oops! Something went wrong! Please try again.</h1>}
      <ContactList/>
    </div>
  )
};