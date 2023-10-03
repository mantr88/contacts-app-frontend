import { Link } from "react-router-dom";

export const AuthNav = () => {
  return (
    <div>
      <Link to="contacts-app-frontend/register">
        <button>Registration</button>
      </Link>
      <Link to="contacts-app-frontend/login">
        <button>LogIn</button>
      </Link>
    </div>
  );
};
