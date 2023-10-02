import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";

export const ContactCard = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>{name}:</p>
      <p>{number}</p>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      ></button>
    </>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
