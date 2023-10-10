import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/auth-operations";
import { Link, useNavigate } from "react-router-dom";
import SignUp from "../components/SignUp/SignUp";

const Register = () => {
  // const dispatch = useDispatch();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case "name":
  //       return setName(value);
  //     case "email":
  //       return setEmail(value);
  //     case "password":
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(register({ name, email, password }))
  //     .unwrap()
  //     .then(() => {
  //       navigate("/");
  //       console.log("You succesfully logined!");
  //     })
  //     .catch(() => console.log("Error of login!"));
  //   setName("");
  //   setEmail("");
  //   setPassword("");
  // };

  return (
    <SignUp />
    // <div>
    //   <h1>Register</h1>
    //   <form onSubmit={handleSubmit} autoComplete="off">
    //     <label>
    //       Name
    //       <input
    //         type="text"
    //         name="name"
    //         value={name}
    //         onChange={handleChange}
    //         placeholder="Enter your name"
    //         autoComplete="name"
    //       />
    //     </label>
    //     <label>
    //       Email
    //       <input
    //         type="email"
    //         name="email"
    //         value={email}
    //         onChange={handleChange}
    //         placeholder="Enter your email"
    //         autoComplete="email"
    //       />
    //     </label>
    //     <label>
    //       Password
    //       <input
    //         type="password"
    //         name="password"
    //         value={password}
    //         onChange={handleChange}
    //         placeholder="Enter your password"
    //         autoComplete="password"
    //       />
    //     </label>
    //     <Link to="contacts-app-frontend/login">Go to Log in</Link>
    //     <button type="submit">Sign Up</button>
    //   </form>
    // </div>
  );
};

export default Register;
