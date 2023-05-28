import PropTypes from 'prop-types';

// Список контактів
export const Contacts = ({ contactsList, onContactRemove }) => (
  <ul>
    {contactsList.map(contact => (
      <li key={contact.id}>
        <p>{contact.name}</p>
        <p>{contact.number}</p>

        {
          // Кнопка видалення контакту
          <button
            type="button"
            name="delete"
            onClick={() => onContactRemove(contact.id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onContactRemove: PropTypes.func.isRequired,
};
