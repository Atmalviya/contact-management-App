import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { deleteContact } from "../features/contacts/contactsSlice";
import ContactModal from "./ContactForm";
import { Contact } from "../features/contacts/contactsTypes";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";

const ContactDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const contact = useSelector((state: RootState) =>
    state.contacts.contacts.find((c) => c.id === id)
  ) as Contact | undefined;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  if (!contact) {
    return (
      <div className="p-6 text-center text-gray-600">
        <p className="text-xl">Contact not found</p>
        <button
          onClick={() => navigate("/contacts")}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Back to Contacts
        </button>
      </div>
    );
  }

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    if (id) {
      dispatch(deleteContact(id));
      navigate("/");
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{`${contact.firstName} ${contact.lastName}`}</h2>
      <p className="text-lg mb-2">Status: {contact.status}</p>
      <p className="text-lg mb-2">Email: {contact.email}</p>
      <p className="text-lg">Phone: {contact.phone}</p>
      <div className="mt-4 flex space-x-4">
        <button
          onClick={handleEdit}
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors"
        >
          <FiEdit />
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
        >
          <FaRegTrashAlt />
        </button>
      </div>

      {isModalOpen && (
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          contactId={id}
        />
      )}
    </div>
  );
};

export default ContactDetails;
