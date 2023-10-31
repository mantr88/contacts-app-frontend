import {
  EmailOutlined,
  PersonOutlined,
  LocalPhoneOutlined,
  SaveOutlined,
} from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const AddNewContact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const btnSubmitHandle = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(evt);

    setEmailError(false);
    setNameError(false);
    setPhoneError(false);

    if (email == "") {
      setEmailError(true);
    }
    if (name == "") {
      setNameError(true);
    }
    if (phone == "") {
      setPhoneError(true);
    }

    if (email && name && phone) {
      console.log(email, name, phone);
    }
  };

  return (
    <>
      <form onSubmit={btnSubmitHandle} autoComplete="off">
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
              error={nameError}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              value={name}
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
              error={emailError}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              value={email}
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
              error={phoneError}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPhone(e.target.value)
              }
              value={phone}
            />
          </Box>
        </Box>
      </form>
    </>
  );
};

export default AddNewContact;
