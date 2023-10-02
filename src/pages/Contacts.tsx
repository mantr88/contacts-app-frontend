import css from "../loyouts/MainLoyout/MainLoyout.module.css";
import { ContactList } from "../ui/ContactsList/ContactsList";
const Contacts = () => {
  return (
    <div className={css.main}>
      Contacts page
      <ContactList />
    </div>
  );
};

export default Contacts;
