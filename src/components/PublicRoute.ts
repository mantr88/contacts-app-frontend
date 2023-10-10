import { useSelector } from "react-redux";
import { RouteProps, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/auth-selectors";
import { useEffect } from "react";

export const PublicRoute = ({ children }: RouteProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/contacts-app-frontend/contacts");
    }
  }, [isLoggedIn, navigate]);

  return children;
};
