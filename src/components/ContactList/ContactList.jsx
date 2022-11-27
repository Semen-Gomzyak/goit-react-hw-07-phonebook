import { ContactsList } from './ContactList.styled';
import PropTypes from 'prop-types';
import { ContactsItem } from '../ContactsItem/ContactsItem';

export const ContactList = ({ contacts }) => (
  <ContactsList>
    {contacts.map(({ id, name, phonenumber }) => (
      <ContactsItem
        key={id}
        contact={{ id, name, phonenumber }}
      />
    ))}
  </ContactsList>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
