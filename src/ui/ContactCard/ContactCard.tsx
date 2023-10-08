import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";

export const ContactCard = ({ contact: { name, phone, _id } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>{name}:</p>
      <p>{phone}</p>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(_id))}
      ></button>
    </>
  );
};
