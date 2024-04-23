export const ContactList = ({ contacts, filteredContacts, removeContact }) => {
  return (
    <ul>
      {filteredContacts.length === 0 ? (
        <li>Nie znaleziono kontaktów</li>
      ) : (
        filteredContacts.map(contact => (
          <li className="listItem" key={contact.id}>
            <p>
              {contact.name}:{contact.number}
            </p>
            <button
              className="buttonDelete"
              onClick={() => removeContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
};
