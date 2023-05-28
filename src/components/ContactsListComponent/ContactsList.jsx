import PropTypes from 'prop-types';
import {
  ContactsListList,
  ContactsListItem,
  ContactsListItemContainer,
  ContactsListButton,
} from './ContactsList.styled';

// Список контактів
export const Contacts = ({ contactsList, onContactRemove }) => (
  <ContactsListList>
    {contactsList.map(contact => (
      <ContactsListItem key={contact.id}>
        <ContactsListItemContainer>
          <p>{contact.name} :</p>
          <p>{contact.number}</p>
        </ContactsListItemContainer>

        {
          // Кнопка видалення контакту
          <ContactsListButton
            type="button"
            name="delete"
            onClick={() => onContactRemove(contact.id)}
          >
            Delete
          </ContactsListButton>
        }
      </ContactsListItem>
    ))}
  </ContactsListList>
);

Contacts.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onContactRemove: PropTypes.func.isRequired,
};
