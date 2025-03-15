import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import s from './Contact.module.css'
import { FaUser, FaPhoneAlt } from "react-icons/fa";


export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleClickDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.contactContainer}>
      <div>
        <p className={s.contactText}>
          <FaUser />
          {contact.name}
        </p>
        <p>
          <FaPhoneAlt />
          {contact.number}
        </p>
        <button type="button" onClick={() => handleClickDelete(contact.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
