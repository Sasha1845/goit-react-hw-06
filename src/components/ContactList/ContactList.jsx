import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
