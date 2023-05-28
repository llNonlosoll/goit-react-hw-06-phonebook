import { Component } from 'react';
import { nanoid } from 'nanoid';

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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label htmlFor={this.numberId}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">Add contact </button>
      </form>
    );
  }
}

export default ContactForm;
