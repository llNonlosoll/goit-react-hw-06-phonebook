import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactFormComponent/ContactForm';
import { Contacts } from './ContactsListComponent/ContactsList';
import { Filter } from './FilterComponent/Filter';

import {
  AppContainer,
  AppTitle,
  AppSecondaryTitle,
  EmptyText,
} from './App.styled';

const STORAGE_KEY = 'phone-book';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? defaultContacts;
  });
  const [filter, setFilter] = useState('');

  // ===componentDidUpdate
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // Додавання контакту
  const addContactToList = contact => {
    const isInContacts = contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [
      { id: nanoid(), ...contact },
      ...prevContacts,
    ]);
  };

  // Видалення контакту
  const removeContactFromList = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
  };

  // Filter value
  const filterValue = event => {
    setFilter(event.target.value);
  };

  // Фільтровані контакти
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <AppContainer>
      <AppTitle>PhoneBook</AppTitle>
      <ContactForm onSubmit={addContactToList} />
      <AppSecondaryTitle>Contacts</AppSecondaryTitle>
      {contacts.length > 0 ? (
        <Filter onFilterChange={filterValue} value={filter}></Filter>
      ) : (
        <EmptyText>YOUR PHONEBOOK IS EMPTY</EmptyText>
      )}
      {contacts.length > 0 && (
        <Contacts
          contactsList={filteredContacts}
          onContactRemove={removeContactFromList}
        />
      )}
    </AppContainer>
  );
}
