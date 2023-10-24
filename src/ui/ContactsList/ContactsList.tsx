import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/selectors";
import { ContactCard } from "../ContactCard/ContactCard";
import contacts from "../../mock/contacts.json";

export const ContactList = () => {
  // const visibleContacts = useSelector(selectVisibleContacts);
  const visibleContacts = contacts;

  return (
    <>
      <>
        {visibleContacts.map((contact) => (
          <ContactCard key={contact._id} contact={contact} />
        ))}
      </>
    </>
  );
};
