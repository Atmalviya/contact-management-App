import React, { useState } from 'react';
import ContactList from '../components/ContactList';
import ContactModal from '../components/ContactForm';

const ContactsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);

  const openAddContactModal = () => {
    setSelectedContactId(null); // Reset selected contact to null
    setIsModalOpen(true);       // Open the modal
  };

  return (
    <div className="p-4">
      <button
        onClick={openAddContactModal}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
      >
        Add Contact
      </button>
      <ContactList />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        contactId={selectedContactId}
      />
    </div>
  );
};

export default ContactsPage;
