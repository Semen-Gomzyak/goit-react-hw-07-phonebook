import { IconButton } from 'components/IconButton/IconButton.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';
import { ContactInfo, ContactInformation } from './ContactsItem.styled';
import { ReactComponent as DeleteIcon } from '../svg/delete.svg';

export const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, phonenumber } = contact;

  return (
    <ContactInfo key={id}>
      <ContactInformation>
        - {name}:    {phonenumber}
      </ContactInformation>
      <IconButton type="button" onClick={() => dispatch(deleteContact(id))}>
        <DeleteIcon width="25px" height="25px" />
      </IconButton>
    </ContactInfo>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phonenumber: PropTypes.string.isRequired,
  }),
};
