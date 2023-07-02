import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

import {
  ContactsListList,
  ContactsListItem,
  ContactsListItemContainer,
  ContactsListButton,
} from './ContactsList.styled';

// Список контактів
export function Contacts() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleContactDelete = contactID => dispatch(deleteContact(contactID));

  return (
    <ContactsListList>
      {contacts.map(contact => (
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
              onClick={() => handleContactDelete(contact.id)}
            >
              Delete
            </ContactsListButton>
          }
        </ContactsListItem>
      ))}
    </ContactsListList>
  );
}
