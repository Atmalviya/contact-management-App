import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { deleteContact } from '../features/contacts/contactsSlice';
import ContactModal from './ContactForm';
import { Link } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt, FaExternalLinkAlt } from "react-icons/fa";

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    setSelectedContactId(id);
    setIsModalOpen(true);
  };

  if (contacts.length === 0) {
    return (
      <div className="text-center text-gray-600 mt-8">
        No Contacts Available. Click on the "Add Contact" button to add contacts.
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <ul className="space-y-4">
        {contacts.map((contact) => (
          <li key={contact.id} className="border p-4 sm:p-6 rounded-lg shadow-md bg-white hover:bg-gray-100 transition-colors duration-200">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-lg font-semibold">{`${contact.firstName} ${contact.lastName}`}</h3>
                <p className="text-sm text-gray-500">Status: {contact.status}</p>
              </div>
              <div className="flex space-x-2">
                <Link
                  to={`/contacts/${contact.id}`}
                  className="flex items-center justify-center bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors"
                >
                  <FaExternalLinkAlt />
                </Link>
                <button
                  onClick={() => handleEdit(contact.id)}
                  className="flex items-center justify-center bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition-colors"
                >
                  <FiEdit />
                </button>
                <button
                  onClick={() => dispatch(deleteContact(contact.id))}
                  className="flex items-center justify-center bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
                >
                  <FaRegTrashAlt />
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
