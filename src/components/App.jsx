// Імпортуємо хук useSelector
import { useSelector } from 'react-redux';
// Імпортуємо селектор
import { getContacts } from 'redux/selectors';
// Імпортуємо компоненти
import { ContactForm } from './ContactFormComponent/ContactForm';
import { Contacts } from './ContactsListComponent/ContactsList';
import { Filter } from './FilterComponent/Filter';
// Імпортуємо стилізовані компоненти
import {
  AppContainer,
  AppTitle,
  AppSecondaryTitle,
  EmptyText,
} from './App.styled';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <AppContainer>
      <AppTitle>PhoneBook</AppTitle>

      <ContactForm />

      {contacts.length > 0 && <AppSecondaryTitle>Contacts</AppSecondaryTitle>}

      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <EmptyText>YOUR PHONEBOOK IS EMPTY</EmptyText>
      )}

      {contacts.length > 0 && <Contacts />}
    </AppContainer>
  );
}
