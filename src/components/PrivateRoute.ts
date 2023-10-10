import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/auth-selectors";
import { RouteProps } from "../Types/ComponentTypes";
import { useEffect } from "react";

export const PrivateRoute = ({ children }: RouteProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/contacts-app-frontend/login");
    }
  }, [isLoggedIn, navigate]);

  return children;
};
