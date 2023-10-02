import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/selectors";
import { ContactCard } from "../ContactCard/ContactCard";

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <>
        {visibleContacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </>
    </>
  );
};
