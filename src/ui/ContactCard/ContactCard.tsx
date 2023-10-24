import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import { Contact } from "../../Types/ComponentTypes";
import { Box, Button } from "@mui/material";

type Props = {
  contact: Contact;
};

export const ContactCard = ({ contact: { name, phone, _id } }: Props) => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ display: "flex", gap: 12, mb: 2 }}>
      <p>{name}:</p>
      <p>{phone}</p>
      <Button
        variant="outlined"
        type="button"
        onClick={() => dispatch(deleteContact(_id))}
      >
        Delete
      </Button>
    </Box>
  );
};
