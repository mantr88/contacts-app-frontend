import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/auth-selectors";
import { RouteProps } from "../Types/ComponentTypes";

export const PrivateRoute = ({ children }: RouteProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  return isLoggedIn ? children : navigate("contacts-app-frontend//login");
};
