import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import { ContactForm } from './ContactFormComponent/ContactForm';
import { Contacts } from './ContactsListComponent/ContactsList';
import { Filter } from './FilterComponent/Filter';

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
      <AppSecondaryTitle>Contacts</AppSecondaryTitle>
      {contacts.length > 0 ? (
        <Filter></Filter>
      ) : (
        <EmptyText>YOUR PHONEBOOK IS EMPTY</EmptyText>
      )}
      {contacts.length > 0 && <Contacts />}
    </AppContainer>
  );
}
