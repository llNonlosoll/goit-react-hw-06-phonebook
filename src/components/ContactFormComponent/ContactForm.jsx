import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

import {
  ContactFormForm,
  ContactFormLabel,
  ContactFormInput,
  ContactFormButton,
} from './ContactForm.styled';

export function ContactForm() {
  const dispatch = useDispatch();

  // Опрацювання форми
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addContact(form.elements.name.value, form.elements.number.value));
    form.reset();
  };

  return (
    <ContactFormForm onSubmit={handleSubmit}>
      <div>
        <ContactFormLabel htmlFor="name">
          Name
          <ContactFormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </ContactFormLabel>
        <ContactFormLabel htmlFor="number">
          Number
          <ContactFormInput
            type="tel"
            name="number"
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