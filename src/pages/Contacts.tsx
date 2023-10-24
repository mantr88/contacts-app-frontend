import { useEffect } from "react";
import { ContactList } from "../ui/ContactsList/ContactsList";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/operations";
const Contacts = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <div>
      Contacts page
      <ContactList />
    </div>
  );
};

export default Contacts;
