import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import { Contact } from "../../Types/ComponentTypes";

import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  contact: Contact;
};

export const ContactCard = ({ contact: { name, phone, _id } }: Props) => {
  const dispatch = useDispatch();
  return (
    <Box sx={{ display: "flex", gap: 12, mb: 2 }}>
      <Typography sx={{ width: "150px" }}>{name}:</Typography>
      <Typography>{phone}</Typography>
      <Button
        variant="outlined"
        type="button"
        onClick={() => dispatch(deleteContact(_id))}
        size="small"
        startIcon={<DeleteIcon />}
        sx={{ color: "black", borderColor: "black" }}
      >
        Delete
      </Button>
    </Box>
  );
};
