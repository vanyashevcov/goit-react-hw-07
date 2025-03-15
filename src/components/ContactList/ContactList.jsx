import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContactsMemo } from "../../redux/contactsSlice";
import s from './ContactList.module.css'

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContactsMemo);

  return (
    <ul className={s.contactList}>
      {filteredContacts.map((item) => (
        <li key={item.id} className={s.contactItem}>
          <Contact contact={item} />
        </li>
      ))}
    </ul>
  );
}
