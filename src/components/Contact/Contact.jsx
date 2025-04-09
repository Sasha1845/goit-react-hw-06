"use client";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../components/redux/contactsSlice.js";
import styles from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={styles.contact}>
      <div className={styles.info}>
        <span className={styles.name}>{contact.name}:</span>
        <span className={styles.number}>{contact.number}</span>
      </div>
      <button
        type="button"
        className={styles.deleteButton}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
