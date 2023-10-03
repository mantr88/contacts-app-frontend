import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/auth-selectors";

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  return !isLoggedIn ? children : navigate("contacts-app-frontend/contacts");
};
