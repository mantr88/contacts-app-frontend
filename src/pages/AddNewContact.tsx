import {
  EmailOutlined,
  PersonOutlined,
  LocalPhoneOutlined,
  SaveOutlined,
} from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";

const AddNewContact = () => {
  const btnSubmitHandle = (evt: React.FormEvent) => {
    evt.preventDefault();
    console.log(evt);
  };
  return (
    <>
      <form onSubmit={btnSubmitHandle}>
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: 4, width: 620 }}
        >
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              variant="outlined"
              startIcon={<SaveOutlined />}
              sx={{ borderRadius: "50px" }}
              type="submit"
            >
              Save
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <PersonOutlined sx={{ marginRight: 2 }} />
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              size="small"
              sx={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <EmailOutlined sx={{ marginRight: 2 }} />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              size="small"
              sx={{ width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <LocalPhoneOutlined sx={{ marginRight: 2 }} />
            <TextField
              id="phone"
              label="Phone"
              variant="outlined"
              size="small"
              sx={{ width: "100%" }}
            />
          </Box>
        </Box>
      </form>
    </>
  );
};

export default AddNewContact;
