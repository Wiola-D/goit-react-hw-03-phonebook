import { nanoid } from 'nanoid';
import { useState } from 'react';

export const ContactForm = ({ contacts, addContact }) => {
  const [nameValue, setNameValue] = useState('');
  const [numberValue, setNumberValue] = useState('');

  const onSubmit = evt => {
    evt.preventDefault();

    const isDuplicate = contacts.some(
      contact => contact.name.toUpperCase() === nameValue.toUpperCase()
    );

    if (isDuplicate) {
      alert(`${nameValue} is already in contacts!`);
      return;
    }
    const newContact = { name: nameValue, number: numberValue, id: nanoid() };
    addContact(newContact);

    setNameValue('');
    setNumberValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={nameValue}
          onChange={e => setNameValue(e.target.value)}
          required
        />
      </div>
      <div className="container">
        <label htmlFor="name">Number</label>
        <input
          type="text"
          name="number"
          id="number"
          value={numberValue}
          onChange={e => setNumberValue(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};
