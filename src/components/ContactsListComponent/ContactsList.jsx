import {
  ContactsListList,
  ContactsListItem,
  ContactsListItemContainer,
  ContactsListButton,
} from './ContactsList.styled';

// Список контактів
export function Contacts({ contactsList, onContactRemove }) {
  return (
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
}
