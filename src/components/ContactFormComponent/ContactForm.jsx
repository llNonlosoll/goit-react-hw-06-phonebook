import { Component } from 'react';
import { nanoid } from 'nanoid';

import {
  ContactFormForm,
  ContactFormLabel,
  ContactFormInput,
  ContactFormButton,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // ID для інпутів форми
  nameId = nanoid();
  numberId = nanoid();

  // Опрацювання форми
  handleSubmit = event => {
    event.preventDefault();

    //Виклик функції з props onSubmit
    this.props.onSubmit({ name: this.state.name, number: this.state.number });

    // Form reset
    this.setState({ number: '', name: '' });
  };

  // Опрацювання полів форми
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <ContactFormForm onSubmit={this.handleSubmit}>
        <div>
          <ContactFormLabel htmlFor={this.nameId}>
            Name
            <ContactFormInput
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </ContactFormLabel>
          <ContactFormLabel htmlFor={this.numberId}>
            Number
            <ContactFormInput
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
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
}

export default ContactForm;
