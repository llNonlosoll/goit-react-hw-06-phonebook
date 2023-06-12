import { useState } from 'react';
import { nanoid } from 'nanoid';

import {
  ContactFormForm,
  ContactFormLabel,
  ContactFormInput,
  ContactFormButton,
} from './ContactForm.styled';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // ID для інпутів форми
  const nameId = nanoid();
  const numberId = nanoid();

  // Опрацювання форми
  const handleSubmit = event => {
    event.preventDefault();

    //Виклик функції з props onSubmit
    onSubmit({ name, number });

    // Form reset
    setName('');
    setNumber('');
  };

  // Опрацювання полів форми
  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        alert('This option doesn`t exist');
        break;
    }
  };

  return (
    <ContactFormForm onSubmit={handleSubmit}>
      <div>
        <ContactFormLabel htmlFor={nameId}>
          Name
          <ContactFormInput
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </ContactFormLabel>
        <ContactFormLabel htmlFor={numberId}>
          Number
          <ContactFormInput
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </ContactFormLabel>
      </div>

      <ContactFormButton type="submit">Add contact </ContactFormButton>
    </ContactFormForm>
  );
}
