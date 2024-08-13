import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { deleteContact } from '../features/contacts/contactsSlice';
import ContactModal from './ContactForm';

const ContactList = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    setSelectedContactId(id);
    setIsModalOpen(true);
  };


  if (contacts.length === 0) {
    return <div>No Contacts Available, Click on Add Contact Button to Add Contacts</div>;
  }

  return (
    <div className="p-4">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="border p-2 mb-2">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{`${contact.firstName} ${contact.lastName}`}</h3>
                
                <p>Status: {contact.status}</p>
              </div>
              <div>
                <button
                  onClick={() => handleEdit(contact.id)}
                  className="bg-yellow-500 text-white py-1 px-2 rounded mr-2"
                >
                  Edit
                </button>
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
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        contactId={selectedContactId}
      />
    </div>
  );
};

export default ContactList;
