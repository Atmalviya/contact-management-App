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
    <div className="p-4 flex flex-col items-center justify-center w-full">
      <button
        onClick={openAddContactModal}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4 transition-transform transform hover:scale-105"
      >
        Add Contact
      </button>
      <div className="w-full md:w-3/4 lg:w-2/3">
        <ContactList />
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        contactId={selectedContactId}
      />
    </div>
  );
};

export default ContactsPage;
