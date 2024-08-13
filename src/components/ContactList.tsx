import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { deleteContact } from '../features/contacts/contactsSlice';

const ContactList = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="border p-2 mb-2">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{contact.name}</h3>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
              </div>
              <div>
                <button
                  onClick={() => dispatch(deleteContact(contact.id))}
                  className="bg-red-500 text-white py-1 px-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
