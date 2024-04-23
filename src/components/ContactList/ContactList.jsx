export const ContactList = ({ contacts, filteredContacts, removeContact }) => {
  return (
    <ul>
      {filteredContacts.length === 0 ? (
        <li>Nie znaleziono kontaktów</li>
      ) : (
        filteredContacts.map(contact => (
          <li className="listItem" key={contact.id}>
            <div className="liContact">
              <p>{contact.name}:</p>
              <p>{contact.number}</p>
            </div>
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
