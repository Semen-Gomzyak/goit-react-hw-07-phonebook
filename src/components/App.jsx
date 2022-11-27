import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { TitleBig, PrimaryTitles } from './Title/Title';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { updateFiter } from 'redux/contacts/contactsActions';
import { contactsOperations } from 'redux/contacts';
import { useEffect } from 'react';

export function App() {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.entities);
    const filter = useSelector(state => state.contacts.filter);

   useEffect(() => {
     dispatch(contactsOperations.fetchContacts());
   }, [dispatch]);

  const formSubmitHandler = data => {
    const { name, number } = data;

    const contact = {
      name,
      phone: number,
    };

    const nameExists = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (nameExists) {
      toast.error(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(contact));
  };

  const changeFilter = event => {
    dispatch(updateFiter(event.currentTarget.value));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'display',
      }}
    >
      <TitleBig>Phonebook</TitleBig>
      <ContactForm onSubmit={formSubmitHandler} />

      <PrimaryTitles>Contacts</PrimaryTitles>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={getFilteredContacts()} />
      <ToastContainer autoClose={4000} />
    </div>
  );
}
