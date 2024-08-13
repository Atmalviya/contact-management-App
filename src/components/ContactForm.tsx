import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../features/contacts/contactsSlice';
import { Contact } from '../features/contacts/contactsTypes';
import { v4 as uuidv4 } from 'uuid';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact: Contact = { id: uuidv4(), name, email, phone };
    dispatch(addContact(newContact));
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
