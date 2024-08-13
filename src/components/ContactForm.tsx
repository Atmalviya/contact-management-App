import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateContact } from '../features/contacts/contactsSlice';
import { Contact } from '../features/contacts/contactsTypes';
import { RootState } from '../store';
import { v4 as uuidv4 } from 'uuid';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  contactId?: string | null;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, contactId }) => {
  const dispatch = useDispatch();
  const contact = useSelector((state: RootState) =>
    state.contacts.contacts.find((c) => c.id === contactId)
  );

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState<'active' | 'inactive'>('inactive');

  useEffect(() => {
    if (isOpen) {
      if (contactId && contact) {
        setFirstName(contact.firstName);
        setLastName(contact.lastName);
        setStatus(contact.status);
      } else {
        setFirstName('');
        setLastName('');
        setStatus('inactive');
      }
    }
  }, [isOpen, contactId, contact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newContact: Contact = {
      id: contactId || uuidv4(),
      firstName,
      lastName,
      status,
    };
    if (contactId) {
      dispatch(updateContact(newContact));
    } else {
      dispatch(addContact(newContact));
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded"
        >
          X
        </button>
        <h2 className="text-lg font-bold mb-4">{contactId ? 'Edit Contact' : 'Create Contact Screen'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">First Name:</label>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Last Name:</label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Status:</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={status === 'active'}
                  onChange={() => setStatus('active')}
                  className="mr-2"
                />
                Active
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="status"
                  value="inactive"
                  checked={status === 'inactive'}
                  onChange={() => setStatus('inactive')}
                  className="mr-2"
                />
                Inactive
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
              Save Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
