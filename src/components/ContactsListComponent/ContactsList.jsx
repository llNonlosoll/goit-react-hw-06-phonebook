// Імпортуємо хуки useSelector, useDispatch
import { useSelector, useDispatch } from 'react-redux';
// Імпортуємо action
import { deleteContact } from 'redux/contactsSlice';
// Імпортуємо селектори
import { getContacts, getFilter } from 'redux/selectors';
// Імпортуємо стилізовані компоненти
import {
  ContactsListList,
  ContactsListItem,
  ContactsListItemContainer,
  ContactsListButton,
} from './ContactsList.styled';

// Список контактів
export function Contacts() {
  // Отримуємо список контактів зі стану
  const contacts = useSelector(getContacts);
  // Отримуємо значення фільтру зі стану
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  // Фільтровані контакти
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  // Видалення контакту
  const handleContactDelete = contactID => dispatch(deleteContact(contactID));

  return (
    // Список контактів
    <ContactsListList>
      {filteredContacts.map(contact => (
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
